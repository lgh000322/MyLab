package event.practice.member.controller;

import event.practice.member.service.MemberFacadeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberFacadeService memberFacadeService;

    @GetMapping("/async-test")
    public void asyncTest() {
        memberFacadeService.asyncTest();
    }
}
