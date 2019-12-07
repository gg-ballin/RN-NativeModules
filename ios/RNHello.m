//
//  RNHello.m
//  NativeModules
//
//  Created by German Gomez on 02/12/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNHello.h"
#import <React/RCTLog.h>

@implementation RNHello

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  callback(@[@"Hello from native ios"]);
}

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

@end
