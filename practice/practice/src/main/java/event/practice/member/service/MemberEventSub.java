package event.practice.member.service;

import event.practice.member.entity.Member;
import event.practice.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.transaction.event.TransactionPhase;
import org.springframework.transaction.event.TransactionalEventListener;

@Component
@Slf4j
@RequiredArgsConstructor
public class MemberEventSub {

    private final MemberRepository memberRepository;

    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT) // 이벤트를 발행한 쓰레드가 커밋되었을때 비동기로 수행하게 함
    @Async("eventHandlerTaskExecutor")
    public void doEventProcess(Member member) {
        log.info("비동기 이벤트 수행");
        log.info(member.toString());
        memberRepository.deleteById(member.getId());
    }
}
