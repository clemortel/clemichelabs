// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'contact_submission.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_ContactSubmission _$ContactSubmissionFromJson(Map<String, dynamic> json) =>
    _ContactSubmission(
      name: json['name'] as String,
      email: json['email'] as String,
      message: json['message'] as String,
      createdAt: json['createdAt'] == null
          ? null
          : DateTime.parse(json['createdAt'] as String),
    );

Map<String, dynamic> _$ContactSubmissionToJson(_ContactSubmission instance) =>
    <String, dynamic>{
      'name': instance.name,
      'email': instance.email,
      'message': instance.message,
      'createdAt': instance.createdAt?.toIso8601String(),
    };
