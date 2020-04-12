//
//  CounterViewManager.swift
//  NativeModules
//
//  Created by German Gomez on 06/12/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

// CounterViewManager.swift
@objc(MyViewManager)
class MyViewManager : RCTViewManager {
  override func view() -> UIView! {
    return CounterView()
  }
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
