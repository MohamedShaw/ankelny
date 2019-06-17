package com.ankelny;

import android.app.Application;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.imagepicker.ImagePickerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage; // <-- Add this line
import java.util.Arrays;
import java.util.List;
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;


public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFirebasePackage(),
            new RNI18nPackage(),
            new VectorIconsPackage(),
            new ImagePickerPackage(),
              new ReactNativeLocalizationPackage(),
              new RNFirebaseNotificationsPackage(),
              new RNFirebaseMessagingPackage()

              );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
