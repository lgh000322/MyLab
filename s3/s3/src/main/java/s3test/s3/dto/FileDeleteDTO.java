package s3test.s3.dto;

import lombok.Builder;

@Builder
public record FileDeleteDTO(String fileName) {
}
