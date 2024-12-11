package s3test.s3.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import s3test.s3.dto.FileDeleteDTO;
import s3test.s3.dto.FileUploadDTO;
import s3test.s3.service.S3TestService;
import s3test.s3.utils.S3Utils;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class S3TestController {

    private final S3TestService s3TestService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestPart(name = "file") List<MultipartFile> files,
                                        @RequestPart(name = "data") String data) {
        List<String> result = s3TestService.uploadFiles(files);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteFile(@RequestBody FileDeleteDTO fileDeleteDTO) {
        System.out.println(fileDeleteDTO.fileName());
        s3TestService.deleteOne(fileDeleteDTO.fileName());
        return ResponseEntity.ok().body("ok");
    }
}
