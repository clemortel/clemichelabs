// PLACEHOLDER — Run `flutterfire configure` to generate this file.
//
// This stub lets the project compile before Firebase is configured.
// Replace it with the real output of:
//   dart pub global activate flutterfire_cli
//   flutterfire configure

import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, TargetPlatform, kIsWeb;

class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
      case TargetPlatform.iOS:
      case TargetPlatform.macOS:
      case TargetPlatform.windows:
      case TargetPlatform.linux:
      case TargetPlatform.fuchsia:
        throw UnsupportedError(
          'DefaultFirebaseOptions is not configured for '
          '${defaultTargetPlatform.name}. '
          'Run flutterfire configure to generate this file.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyBfFmhWzXnZZUcZOyJCMFgkpEQfCfXTnP4',
    appId: '1:436221784838:web:a1130da1fda26cfe61a487',
    messagingSenderId: '436221784838',
    projectId: 'clemichelabs',
    authDomain: 'clemichelabs.firebaseapp.com',
    storageBucket: 'clemichelabs.firebasestorage.app',
    measurementId: 'G-BHGXKJ4NL4',
  );
}
