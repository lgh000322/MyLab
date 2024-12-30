package event.practice.member.service;

import event.practice.member.entity.Member;
import event.practice.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;
    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public void asyncTest() { // 동기 호출후 이벤트 발행
        Member member = Member.createMember("testNickname", "testUsername");
        memberRepository.save(member);
        log.info("비동기 메소드 호출 전");
        eventPublisher.publishEvent(member);
        log.info("비동기 메소드 호출 후");
    }

}
