package event.practice.global.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.task.ThreadPoolTaskExecutorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ApplicationEventMulticaster;
import org.springframework.context.event.SimpleApplicationEventMulticaster;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.annotation.EnableAsync;

@Configuration
@EnableAsync
public class AsyncConfig {

    @Bean
    public ApplicationEventMulticaster applicationEventMulticaster(
            @Qualifier("eventHandlerTaskExecutor") TaskExecutor taskExecutor) {
        SimpleApplicationEventMulticaster eventMulticaster = new SimpleApplicationEventMulticaster();
        eventMulticaster.setTaskExecutor(taskExecutor);
        return eventMulticaster;
    }

    @Bean("eventHandlerTaskExecutor")
    public TaskExecutor eventHandlerTaskExecutor() {
        return new ThreadPoolTaskExecutorBuilder()
                .corePoolSize(10)
                .maxPoolSize(50)
                .queueCapacity(200)
                .threadNamePrefix("EventHandler-")
                .build();
    }
}
