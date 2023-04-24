/**
 * Using the cookie input, extract features from the cookie and classify it, retrieving a label.
 * @param  {Object} feature_input   Transformed cookie data input, for the feature extraction.
 * @return {Promise<Number>}        Cookie category label as an integer, ranging from [0,3].
 */

import { extractFeatures } from "./predictor/extractor";
import { predictClass } from "./predictor/predictor";

export const classifyCookie = async (
  cookieDat: chrome.cookies.Cookie,
  feature_input: any
) => {
  console.log("Classifying cookie");
  let features = extractFeatures(feature_input);
  let label = await predictClass(features, 3);
  console.log({ label });
};
