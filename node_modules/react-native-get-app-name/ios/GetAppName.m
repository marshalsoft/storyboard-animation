#import "GetAppName.h"

@implementation GetAppName

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getAppName:(RCTResponseSenderBlock)callback)
{
    NSString *appName = [self getAppName];
    callback(@[[NSString stringWithFormat: @"%@", appName]]);
}

- (NSString *) getAppName {
    NSString *displayName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
    NSString *bundleName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleName"];
    return displayName ? displayName : bundleName;
}

@end
