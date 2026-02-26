import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

enum ContactFormStatus { idle, sending, sent, error }

class ContactFormState {
  final ContactFormStatus status;
  final String? errorMessage;

  const ContactFormState({
    this.status = ContactFormStatus.idle,
    this.errorMessage,
  });

  ContactFormState copyWith({
    ContactFormStatus? status,
    String? errorMessage,
  }) {
    return ContactFormState(
      status: status ?? this.status,
      errorMessage: errorMessage ?? this.errorMessage,
    );
  }
}

final NotifierProvider<ContactFormNotifier, ContactFormState>
    contactFormProvider =
    NotifierProvider<ContactFormNotifier, ContactFormState>(
  ContactFormNotifier.new,
);

class ContactFormNotifier extends Notifier<ContactFormState> {
  @override
  ContactFormState build() => const ContactFormState();

  Future<void> submit({
    required String name,
    required String email,
    required String message,
  }) async {
    state = state.copyWith(status: ContactFormStatus.sending);

    try {
      await FirebaseFirestore.instance
          .collection('contact_submissions')
          .add({
        'name': name,
        'email': email,
        'message': message,
        'createdAt': FieldValue.serverTimestamp(),
      });
      state = state.copyWith(status: ContactFormStatus.sent);
    } on Exception catch (e) {
      state = state.copyWith(
        status: ContactFormStatus.error,
        errorMessage: e.toString(),
      );
    }
  }

  void reset() {
    state = const ContactFormState();
  }
}
