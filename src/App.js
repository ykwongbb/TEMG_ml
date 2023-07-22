import './App.css';
import React, { useState } from 'react';
import q1d_histograms from './media/q1d_histograms.png';
import q1d_boxplots from './media/q1d_boxplots.png';
import q1d_violinplots from './media/q1d_violinplots.png';
import q4a_KNN_confusion_matrix from './media/q4a_KNN_confusion_matrix.png';
import q4a_KNN_roc_curve from './media/q4a_KNN_roc_curve.png';
import q4a_KNN_classification_report from './media/q4a_KNN_classification_report.png';
import q4a_MLP_confusion_matrix from './media/q4a_Multi-Layer Perceptron_confusion_matrix.png';
import q4a_MLP_roc_curve from './media/q4a_Multi-Layer Perceptron_roc_curve.png';
import q4a_MLP_classification_report from './media/q4a_Multi-Layer Perceptron_classification_report.png';
import q4a_RF_confusion_matrix from './media/q4a_Random Forest_confusion_matrix.png';
import q4a_RF_roc_curve from './media/q4a_Random Forest_roc_curve.png';
import q4a_RF_classification_report from './media/q4a_Random Forest_classification_report.png';
import q6_feature_importance from './media/q6_feature_importance.png';
import q6_shap from './media/q6_shap.png';
import q6_lime from './media/q6_lime.png';



function App() {

  const [pages, setPages] = useState([true, false, false]);
  
  function showPages(page) {
    const newPages = pages.map((item, index) => {
      return index === page;
    })
    setPages(newPages)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="Title">
          <h2>Dashboard for ML Assignment</h2>
        </div>
        <div className="Content">
          <div className="Button_Row">
            <button className="Button" onClick={()=>showPages(0)}>Q1(d)</button>
            <button className="Button" onClick={()=>showPages(1)}>Q4(a)</button>
            <button className="Button" onClick={()=>showPages(2)}>Q6</button>
          </div>
          <div className="Page">
            <div className="Page1" style={{display: pages[0] ? 'block' : 'none'}}>
              <text class="sub_sub_title">Histogram</text>
              <img src={q1d_histograms} alt="q1d_histograms" class='q1' />
              <text class="sub_sub_title">Boxplot</text>
              <img src={q1d_boxplots} alt="q1d_boxplots" class='q1' />
              <text class="sub_sub_title">Violinplot</text>
              <img src={q1d_violinplots} alt="q1d_violinplots" class='q1' />
            </div>
            <div className="Page2" style={{display: pages[1] ? 'block' : 'none'}}>
              <div className="Page2_Grid">
                <div className="Page2_Column">
                  <text class="subtitle"></text>
                  <img src={q4a_KNN_confusion_matrix} alt="Q4(a) KNN Confusion Matrix" class='q4a' />
                  <img src={q4a_KNN_roc_curve} alt="Q4(a) KNN ROC Curve" class='q4a' />
                  <img src={q4a_KNN_classification_report} alt="Q4(a) KNN Classification Report" class='q4a' />
                </div>
                <div className="Page2_Column">
                  <text class="subtitle"></text>
                  <img src={q4a_MLP_confusion_matrix} alt="Q4(a) Multi-Layer Perceptron Confusion Matrix" class='q4a' />
                  <img src={q4a_MLP_roc_curve} alt="Q4(a) Multi-Layer Perceptron ROC Curve" class='q4a' />
                  <img src={q4a_MLP_classification_report} alt="Q4(a) Multi-Layer Perceptron Classification Report" class='q4a' />
                </div>
                <div className="Page2_Column">
                  <text class="subtitle"></text>
                  <img src={q4a_RF_confusion_matrix} alt="Q4(a) Random Forest Confusion Matrix" class='q4a' />
                  <img src={q4a_RF_roc_curve} alt="Q4(a) Random Forest ROC Curve" class='q4a' />
                  <img src={q4a_RF_classification_report} alt="Q4(a) Random Forest Classification Report" class='q4a' />
                </div>
              </div>
            </div>
            <div className="Page3" style={{display: pages[2] ? 'block' : 'none'}}>
              <div className="Page3_Grid">
                <div className="Page3_Column">
                  <text class="subtitle">Feature Importance</text>
                  <img src={q6_feature_importance} alt="Q6 Feature Importance" class='q6' />
                </div>
                <div className="Page3_Column">
                  <text class="subtitle">SHAP</text>
                  <img src={q6_shap} alt="Q6 SHAP" class='q6' />
                </div>
                <div className="Page3_Column">
                  <text class="subtitle">LIME</text>
                  <img src={q6_lime} alt="Q6 LIME" class='q6' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;