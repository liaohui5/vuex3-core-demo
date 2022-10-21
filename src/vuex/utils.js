"use strict";

export function forIn(obj, callback) {
  for (const [key, val] of Object.entries(obj)) {
    callback(key, val);
  }
}
