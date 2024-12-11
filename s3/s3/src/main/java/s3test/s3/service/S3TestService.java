package s3test.s3.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import s3test.s3.utils.S3Utils;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class S3TestService {
    private final S3Utils s3Utils;

    public List<String> uploadFiles(List<MultipartFile> files) {
        List<String> result = new ArrayList<>();

        for (MultipartFile file : files) {
            result.add(s3Utils.uploadFile(file));
        }

        return result;
    }

    public void deleteOne(String fileUrl) {
        s3Utils.deleteFile(fileUrl);
    }
}
