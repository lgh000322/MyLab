package event.practice.member.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberFacadeService {

    private final MemberService memberService;

    public void asyncTest() {
        memberService.asyncTest();
    }
}
