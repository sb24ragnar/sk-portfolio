export const projects = [
  {
    title: "Heart Disease Risk Prediction (Explainable ML)",
    impact:
      "End-to-end machine learning pipeline to predict heart disease risk with explainability for clearer decisions.",
    stack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SMOTE", "SHAP"],
    highlights: [
      "Performed EDA, preprocessing, and class-imbalance handling (SMOTE).",
      "Built an XGBoost-based classifier and validated performance using robust evaluation metrics.",
      "Used SHAP to interpret feature influence and communicate insights clearly.",
    ],
    links: {
      github: "https://github.com/sb24ragnar/Heart-Disease-Risk-Prediction-",
      report: "",
      demo: "",
    },
  },

  {
  title: "Graduate Job Match AI",
  subtitle: "AI-powered CV and job description matching platform",
  description:
    "Built a full-stack AI application that compares CVs with graduate job descriptions using semantic retrieval, vector embeddings, and match scoring. The platform highlights skill gaps and generates tailored interview prep and CV improvement suggestions.",
  tech: ["Next.js", "FastAPI", "Python", "PostgreSQL", "pgvector", "OpenAI", "Tailwind CSS"],
  highlights: [
    "Implemented CV upload and parsing workflow",
    "Used vector embeddings for semantic job-to-CV comparison",
    "Built a match scoring engine for role-fit analysis",
    "Generated interview prep and CV feedback based on job requirements"
  ],
  links: {
    github: "https://github.com/sb24ragnar/AI_Resume_Analysis",
    demo: ""
  }

},
  {
  title: "Oil Price Forecasting with ARIMA and Prophet",
  impact:
    "Built a time series forecasting pipeline on volatile crude oil prices, comparing ARIMA and Prophet to evaluate forecast accuracy, seasonality, and model behaviour under market volatility.",
  stack: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Statsmodels",
    "Prophet",
    "Time Series"
  ],
  highlights: [
    "Performed exploratory analysis on 500 daily oil price observations and identified strong volatility and non-stationarity in the original series.",
    "Applied Augmented Dickey-Fuller testing and first-order differencing to make the series stationary before modelling.",
    "Tuned ARIMA through automated parameter search and compared it against Prophet using held-out RMSE evaluation.",
    "Found that ARIMA outperformed Prophet on this dataset (RMSE 14.78 vs 18.38) while Prophet provided clearer trend and weekly seasonality decomposition."
  ],
  links: {
    github: "https://github.com/sb24ragnar/oil-price-forecasting-arima-prophet",
    report: "",
    demo: ""
  }
}
];