package com.febaisi.reactnative.getappname;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class GetAppNameModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public GetAppNameModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "GetAppName";
    }

    @ReactMethod
    public void getAppName(Callback callback) {
        String appName = "";
        if (this.reactContext != null) {
            appName = reactContext.getApplicationInfo().loadLabel(reactContext.getPackageManager()).toString();
        }
        callback.invoke(appName);
    }
}
