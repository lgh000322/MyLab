package s3test.s3.dto;

import lombok.Builder;

@Builder
public record FileUploadDTO(String title) {
}
