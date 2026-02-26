import 'package:freezed_annotation/freezed_annotation.dart';

part 'contact_submission.freezed.dart';
part 'contact_submission.g.dart';

@freezed
abstract class ContactSubmission with _$ContactSubmission {
  const factory ContactSubmission({
    required String name,
    required String email,
    required String message,
    DateTime? createdAt,
  }) = _ContactSubmission;

  factory ContactSubmission.fromJson(Map<String, dynamic> json) =>
      _$ContactSubmissionFromJson(json);
}
