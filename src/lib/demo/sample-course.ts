import type { GeneratedCurriculum } from "@/lib/types";

const src = (page: number, excerpt: string) => [
  {
    filename: "ML_Lecture_Classification.pdf",
    page,
    excerpt,
    supplemental: false as const,
  },
];

/** Built-in demo curriculum so the upload→learn path works without API keys. */
export function buildSampleCurriculum(): GeneratedCurriculum {
  return {
    title: "Machine Learning: Classification Fundamentals",
    subject: "Machine Learning",
    units: [
      {
        title: "Classification Fundamentals",
        conceptIds: ["c-accuracy-trap", "c-precision-recall", "c-confusion"],
      },
      {
        title: "Model Evaluation",
        conceptIds: ["c-overfitting", "c-train-test"],
      },
    ],
    concepts: [
      {
        id: "c-accuracy-trap",
        title: "Why accuracy can mislead",
        summary:
          "High accuracy can hide failure on rare but critical classes.",
        learningObjective:
          "Explain why a 95% accurate model can still be terrible at fraud detection.",
        whyItMatters:
          "Imbalanced classes make accuracy look strong while missing the rare events that matter.",
        prerequisites: [],
        misconceptions: [
          "Higher accuracy always means a better model",
          "Accuracy treats all errors equally in business impact",
        ],
        formulas: ["Accuracy = (TP + TN) / (TP + TN + FP + FN)"],
        sourceRefs: src(
          4,
          "Accuracy alone is insufficient under class imbalance.",
        ),
        difficulty: 0.35,
        sortOrder: 0,
        unitTitle: "Classification Fundamentals",
      },
      {
        id: "c-precision-recall",
        title: "Precision and recall",
        summary:
          "Precision measures trust in positive predictions; recall measures coverage of true positives.",
        learningObjective:
          "Choose between optimizing precision vs recall for a concrete scenario.",
        whyItMatters:
          "Different costs of false positives and false negatives demand different metrics.",
        prerequisites: ["c-accuracy-trap"],
        misconceptions: [
          "Precision and recall always move together",
          "Recall ignores false positives",
        ],
        formulas: [
          "Precision = TP / (TP + FP)",
          "Recall = TP / (TP + FN)",
        ],
        sourceRefs: src(8, "Precision vs recall tradeoff."),
        difficulty: 0.45,
        sortOrder: 1,
        unitTitle: "Classification Fundamentals",
      },
      {
        id: "c-confusion",
        title: "Confusion matrices",
        summary:
          "A 2x2 table organizing TP, FP, FN, TN for binary classification.",
        learningObjective:
          "Read a confusion matrix and compute accuracy, precision, and recall from it.",
        whyItMatters:
          "The matrix makes error types visible instead of collapsing them into one score.",
        prerequisites: ["c-precision-recall"],
        misconceptions: [
          "Rows and columns can be swapped without changing interpretation",
        ],
        formulas: [],
        sourceRefs: src(11, "Confusion matrix layout."),
        difficulty: 0.4,
        sortOrder: 2,
        unitTitle: "Classification Fundamentals",
      },
      {
        id: "c-overfitting",
        title: "Overfitting",
        summary:
          "A model memorizes training quirks and fails to generalize.",
        learningObjective:
          "Detect overfitting from train/test performance patterns.",
        whyItMatters:
          "Production performance depends on generalization, not training fit.",
        prerequisites: ["c-train-test"],
        misconceptions: [
          "A perfect training score always indicates a great model",
        ],
        formulas: [],
        sourceRefs: src(18, "Overfitting definition and symptoms."),
        difficulty: 0.5,
        sortOrder: 4,
        unitTitle: "Model Evaluation",
      },
      {
        id: "c-train-test",
        title: "Training vs testing data",
        summary:
          "Hold out unseen data to estimate real-world performance.",
        learningObjective:
          "Explain why evaluating on training data alone is invalid.",
        whyItMatters:
          "Without a held-out test set, you cannot estimate generalization.",
        prerequisites: [],
        misconceptions: [
          "Using the test set repeatedly for tuning is fine",
        ],
        formulas: [],
        sourceRefs: src(15, "Train/test split purpose."),
        difficulty: 0.3,
        sortOrder: 3,
        unitTitle: "Model Evaluation",
      },
    ],
    lessons: [
      {
        conceptId: "c-accuracy-trap",
        title: "The accuracy trap",
        content: {
          estimatedMinutes: 5,
          steps: [
            {
              id: "s1",
              stage: "orient",
              objective:
                "Understand why a model with 95% accuracy can still be terrible at detecting fraud.",
              whyItMatters:
                "Business decisions based on accuracy alone can miss rare, high-cost failures.",
              priorConnection:
                "Think of a spam filter that marks everything as 'not spam' in an inbox that is 95% legitimate mail.",
            },
            {
              id: "s2",
              stage: "explain",
              plainLanguage:
                "Accuracy asks: overall, how often was the model right? If fraud is only 1% of transactions, a model that never flags fraud is already ~99% accurate — and useless.",
              preciseTerms:
                "Class imbalance: when one class is much rarer than another, majority-class guessing inflates accuracy.",
              visual: {
                kind: "comparison",
                content:
                  "Always-negative model: Accuracy ≈ 99%. Fraud caught: 0%.",
              },
              sourceRefs: src(
                4,
                "Accuracy alone is insufficient under class imbalance.",
              ),
            },
            {
              id: "s3",
              stage: "demonstrate",
              title: "Worked example: 10,000 payments",
              steps: [
                {
                  label: "Setup",
                  detail: "9,900 legitimate + 100 fraudulent payments.",
                },
                {
                  label: "Naive model",
                  detail: "Predict every payment is legitimate.",
                },
                {
                  label: "Score",
                  detail: "9,900 / 10,000 = 99% accuracy. Fraud recall = 0%.",
                },
                {
                  label: "Takeaway",
                  detail:
                    "Accuracy looked excellent while the critical class was completely missed.",
                },
              ],
            },
            {
              id: "s4",
              stage: "guided",
              question: {
                id: "q-guided-acc",
                type: "multiple_choice",
                prompt:
                  "A disease affects 2% of patients. A model always predicts 'healthy'. Approximate accuracy?",
                choices: ["2%", "50%", "98%", "100%"],
                acceptedAnswers: ["98%"],
                misconceptionMap: {
                  "2%": "That is the disease rate, not the accuracy of always predicting healthy.",
                  "100%": "The model is wrong for every sick patient.",
                },
                hints: [
                  "Almost everyone is healthy — what happens if the model never predicts disease?",
                  "Healthy patients ≈ 98%. Always predicting healthy matches that majority.",
                  "Accuracy ≈ 98%, but recall for disease is 0%.",
                ],
                explanation:
                  "With 98% healthy patients, always predicting healthy yields ~98% accuracy while detecting zero disease cases.",
                sourceRefs: src(4, "Accuracy under imbalance."),
                askConfidence: true,
              },
            },
            {
              id: "s5",
              stage: "independent",
              question: {
                id: "q-ind-acc",
                type: "short_answer",
                prompt:
                  "In one sentence, why can 95% accuracy still mean a fraud model is terrible?",
                acceptedAnswers: [
                  "because rare fraud can be completely missed while majority legitimate predictions look accurate",
                  "class imbalance lets majority guessing inflate accuracy while failing the rare class",
                  "accuracy ignores that missing fraud is costly when fraud is rare",
                ],
                hints: [
                  "Focus on what happens to the rare class.",
                  "Accuracy weights every example equally — majority class dominates.",
                  "A model can ignore fraud and still look accurate.",
                ],
                explanation:
                  "When fraud is rare, predicting 'not fraud' most of the time yields high accuracy while missing the cases that matter.",
                sourceRefs: src(4, "Accuracy under imbalance."),
                askConfidence: true,
              },
            },
            {
              id: "s6",
              stage: "application",
              question: {
                id: "q-app-acc",
                type: "scenario",
                prompt:
                  "A hospital dashboard celebrates 96% accuracy for a rare complication detector. What should you check next?",
                choices: [
                  "Nothing — 96% is excellent",
                  "Precision/recall (or sensitivity) on the rare complication class",
                  "Whether the model uses more features",
                  "Whether training time decreased",
                ],
                acceptedAnswers: [
                  "Precision/recall (or sensitivity) on the rare complication class",
                ],
                misconceptionMap: {
                  "Nothing — 96% is excellent":
                    "Accuracy can look strong while missing rare complications.",
                },
                hints: [
                  "What metric reveals performance on the rare class?",
                  "Look at recall/sensitivity for the complication.",
                ],
                explanation:
                  "Inspect class-specific metrics like recall/sensitivity for the rare complication; accuracy can hide misses.",
                sourceRefs: src(5, "Choose metrics matched to costs."),
                askConfidence: true,
              },
            },
            {
              id: "s7",
              stage: "reflect",
              summary:
                "Accuracy collapses all errors into one number. Under class imbalance it can celebrate models that miss the rare class entirely.",
              strengthsPrompt: "You can now spot when accuracy is misleading.",
              uncertaintyPrompt:
                "Next we'll learn precision and recall — metrics that separate error types.",
              xp: 40,
            },
          ],
        },
      },
      {
        conceptId: "c-precision-recall",
        title: "Precision vs recall",
        content: {
          estimatedMinutes: 6,
          steps: [
            {
              id: "p1",
              stage: "orient",
              objective:
                "Choose whether to prioritize precision or recall for a concrete decision.",
              whyItMatters:
                "False alarms and missed detections have different costs.",
              priorConnection:
                "You already know accuracy can hide imbalance — now split the errors apart.",
            },
            {
              id: "p2",
              stage: "explain",
              plainLanguage:
                "Precision asks: of the alerts I raised, how many were real? Recall asks: of the real cases, how many did I catch?",
              preciseTerms:
                "Precision = TP/(TP+FP). Recall = TP/(TP+FN).",
              visual: {
                kind: "equation",
                content: "Precision = TP/(TP+FP) · Recall = TP/(TP+FN)",
              },
              sourceRefs: src(8, "Precision vs recall."),
            },
            {
              id: "p3",
              stage: "demonstrate",
              title: "Worked comparison",
              steps: [
                {
                  label: "Model A",
                  detail: "10 alerts, 9 real → high precision, may miss many.",
                },
                {
                  label: "Model B",
                  detail: "50 alerts, 20 real → catches more, more false alarms.",
                },
                {
                  label: "Choice",
                  detail:
                    "Cancer screening often favors recall; spam filters often favor precision.",
                },
              ],
            },
            {
              id: "p4",
              stage: "guided",
              question: {
                id: "q-pr-1",
                type: "multiple_choice",
                prompt:
                  "A factory must catch nearly every defective part even if some good parts are rechecked. Optimize for:",
                choices: ["Precision", "Recall", "Accuracy only", "Training loss"],
                acceptedAnswers: ["Recall"],
                hints: [
                  "Missing a defective part is costly — what metric focuses on catching positives?",
                  "Recall = TP/(TP+FN) rises when false negatives fall.",
                ],
                explanation:
                  "Catching nearly every defective part means minimizing false negatives → prioritize recall.",
                sourceRefs: src(9, "Cost-sensitive metric choice."),
                askConfidence: true,
              },
            },
            {
              id: "p5",
              stage: "independent",
              question: {
                id: "q-pr-2",
                type: "fill_blank",
                prompt:
                  "Precision = TP / (TP + ____).",
                acceptedAnswers: ["FP", "false positives", "false positive"],
                hints: [
                  "What kind of error pollutes the positive predictions?",
                  "False positives sit in the denominator with TP.",
                ],
                explanation: "Precision = TP / (TP + FP).",
                sourceRefs: src(8, "Precision definition."),
                askConfidence: true,
              },
            },
            {
              id: "p6",
              stage: "application",
              question: {
                id: "q-pr-3",
                type: "self_explain",
                prompt:
                  "Why might raising a model's threshold increase precision but decrease recall?",
                acceptedAnswers: [
                  "higher threshold makes positive predictions stricter so fewer false positives but more missed true positives",
                  "stricter cutoff reduces false alarms but also misses more real cases",
                ],
                hints: [
                  "What happens to borderline positives when the bar rises?",
                  "Fewer predicted positives → often higher precision, lower recall.",
                ],
                explanation:
                  "A higher threshold requires stronger evidence for a positive call, reducing false positives (precision↑) while missing weaker true positives (recall↓).",
                sourceRefs: src(10, "Threshold tradeoffs."),
                askConfidence: true,
              },
            },
            {
              id: "p7",
              stage: "reflect",
              summary:
                "Precision and recall separate trust in alerts from coverage of true cases. Pick the one that matches the cost of errors.",
              strengthsPrompt: "You can map business costs to metric priorities.",
              uncertaintyPrompt: "Confusion matrices make these counts concrete next.",
              xp: 45,
            },
          ],
        },
      },
      {
        conceptId: "c-confusion",
        title: "Reading confusion matrices",
        content: {
          estimatedMinutes: 5,
          steps: [
            {
              id: "m1",
              stage: "orient",
              objective:
                "Read a confusion matrix and derive accuracy, precision, and recall.",
              whyItMatters:
                "Matrices show which mistakes the model makes — not just how often.",
              priorConnection:
                "Precision and recall are ratios of cells in this table.",
            },
            {
              id: "m2",
              stage: "explain",
              plainLanguage:
                "Rows are usually actual classes; columns are predicted classes. The diagonal is correct. Off-diagonal cells are specific error types.",
              sourceRefs: src(11, "Confusion matrix layout."),
            },
            {
              id: "m3",
              stage: "demonstrate",
              title: "Matrix → metrics",
              steps: [
                { label: "Cells", detail: "TP=40, FP=10, FN=20, TN=930" },
                { label: "Accuracy", detail: "(40+930)/1000 = 97%" },
                { label: "Precision", detail: "40/(40+10) = 80%" },
                { label: "Recall", detail: "40/(40+20) ≈ 67%" },
              ],
            },
            {
              id: "m4",
              stage: "guided",
              question: {
                id: "q-cm-1",
                type: "numerical",
                prompt: "TP=30, FP=10. What is precision as a percent (number only)?",
                acceptedAnswers: ["75", "75%"],
                hints: [
                  "Precision = TP/(TP+FP).",
                  "30/(30+10) = 0.75 → 75.",
                ],
                explanation: "Precision = 30/40 = 75%.",
                sourceRefs: src(11, "Compute precision from matrix."),
                askConfidence: true,
              },
            },
            {
              id: "m5",
              stage: "independent",
              question: {
                id: "q-cm-2",
                type: "numerical",
                prompt: "TP=30, FN=20. Recall as a percent?",
                acceptedAnswers: ["60", "60%"],
                hints: ["Recall = TP/(TP+FN).", "30/50 = 0.6."],
                explanation: "Recall = 30/50 = 60%.",
                sourceRefs: src(11, "Compute recall from matrix."),
                askConfidence: true,
              },
            },
            {
              id: "m6",
              stage: "application",
              question: {
                id: "q-cm-3",
                type: "multiple_choice",
                prompt:
                  "Which change most directly reduces false negatives in a confusion matrix?",
                choices: [
                  "Catching more true positives that were previously missed",
                  "Removing true negatives",
                  "Increasing false positives only",
                  "Deleting the test set",
                ],
                acceptedAnswers: [
                  "Catching more true positives that were previously missed",
                ],
                hints: [
                  "False negatives are actual positives predicted negative.",
                ],
                explanation:
                  "Reducing FN means correctly identifying positives that were previously missed (raising TP, lowering FN).",
                sourceRefs: src(12, "Error types."),
                askConfidence: true,
              },
            },
            {
              id: "m7",
              stage: "reflect",
              summary:
                "Confusion matrices make TP/FP/FN/TN visible so metric choices become arithmetic, not slogans.",
              strengthsPrompt: "You can translate matrix cells into metrics.",
              uncertaintyPrompt: "Next: why train/test splits protect these estimates.",
              xp: 40,
            },
          ],
        },
      },
      {
        conceptId: "c-train-test",
        title: "Train vs test",
        content: {
          estimatedMinutes: 4,
          steps: [
            {
              id: "t1",
              stage: "orient",
              objective:
                "Explain why evaluating only on training data is invalid.",
              whyItMatters:
                "You need an honest estimate of performance on unseen data.",
              priorConnection:
                "Metrics are only trustworthy if measured on the right data.",
            },
            {
              id: "t2",
              stage: "explain",
              plainLanguage:
                "Training data teaches the model. Test data is held out to estimate how it behaves on new examples. Peeking at the test set during tuning leaks information.",
              sourceRefs: src(15, "Train/test split purpose."),
            },
            {
              id: "t3",
              stage: "demonstrate",
              title: "Leakage sketch",
              steps: [
                {
                  label: "Bad",
                  detail: "Tune thresholds on the test set until accuracy looks great.",
                },
                {
                  label: "Why bad",
                  detail: "The test set stopped being unseen — estimate is optimistic.",
                },
                {
                  label: "Better",
                  detail: "Use a validation split for tuning; touch test once.",
                },
              ],
            },
            {
              id: "t4",
              stage: "guided",
              question: {
                id: "q-tt-1",
                type: "multiple_choice",
                prompt: "Primary purpose of a held-out test set?",
                choices: [
                  "Estimate generalization to unseen data",
                  "Increase training sample size",
                  "Replace feature engineering",
                  "Guarantee 100% accuracy",
                ],
                acceptedAnswers: ["Estimate generalization to unseen data"],
                hints: ["What question are we trying to answer about new data?"],
                explanation:
                  "A held-out test set estimates how the model generalizes to unseen examples.",
                sourceRefs: src(15, "Test set purpose."),
                askConfidence: true,
              },
            },
            {
              id: "t5",
              stage: "independent",
              question: {
                id: "q-tt-2",
                type: "short_answer",
                prompt:
                  "Why is reporting only training accuracy misleading?",
                acceptedAnswers: [
                  "the model may memorize training data and fail on new examples",
                  "training accuracy does not measure generalization",
                ],
                hints: ["What can a flexible model do with examples it has already seen?"],
                explanation:
                  "Training accuracy can reflect memorization; it does not measure performance on new data.",
                sourceRefs: src(16, "Generalization."),
                askConfidence: true,
              },
            },
            {
              id: "t6",
              stage: "application",
              question: {
                id: "q-tt-3",
                type: "scenario",
                prompt:
                  "A teammate retunes hyperparameters every day using the final test set. What's the risk?",
                choices: [
                  "Optimistic, leaked performance estimates",
                  "Slower GPUs",
                  "Higher precision forever",
                  "No risk if accuracy rises",
                ],
                acceptedAnswers: ["Optimistic, leaked performance estimates"],
                hints: ["The test set is no longer unseen."],
                explanation:
                  "Repeated test-set tuning leaks information and yields overly optimistic estimates.",
                sourceRefs: src(16, "Test set leakage."),
                askConfidence: true,
              },
            },
            {
              id: "t7",
              stage: "reflect",
              summary:
                "Hold out data to estimate generalization. Protect the test set from tuning.",
              strengthsPrompt: "You can critique invalid evaluation setups.",
              uncertaintyPrompt: "Overfitting connects train/test gaps to model behavior.",
              xp: 35,
            },
          ],
        },
      },
      {
        conceptId: "c-overfitting",
        title: "Spotting overfitting",
        content: {
          estimatedMinutes: 5,
          steps: [
            {
              id: "o1",
              stage: "orient",
              objective:
                "Detect overfitting from train vs test performance patterns.",
              whyItMatters:
                "Memorization feels like success until the model meets new data.",
              priorConnection:
                "Train/test splits exist specifically to reveal this failure mode.",
            },
            {
              id: "o2",
              stage: "explain",
              plainLanguage:
                "Overfitting means the model fits training quirks — noise, idiosyncrasies — that do not generalize. Classic signal: excellent train performance, weak test performance.",
              sourceRefs: src(18, "Overfitting definition."),
            },
            {
              id: "o3",
              stage: "demonstrate",
              title: "Pattern recognition",
              steps: [
                { label: "Symptom", detail: "Train accuracy 99%, test accuracy 61%." },
                { label: "Diagnosis", detail: "Likely overfitting or distribution shift." },
                {
                  label: "Responses",
                  detail: "Simplify model, add regularization, more data, fix leakage.",
                },
              ],
            },
            {
              id: "o4",
              stage: "guided",
              question: {
                id: "q-of-1",
                type: "multiple_choice",
                prompt: "Which pattern most suggests overfitting?",
                choices: [
                  "Train 99%, test 60%",
                  "Train 70%, test 71%",
                  "Train 50%, test 90%",
                  "Train 80%, test 80%",
                ],
                acceptedAnswers: ["Train 99%, test 60%"],
                hints: ["Look for a large optimistic gap favoring training."],
                explanation:
                  "A large train≫test gap is a classic overfitting signal.",
                sourceRefs: src(18, "Overfitting symptoms."),
                askConfidence: true,
              },
            },
            {
              id: "o5",
              stage: "independent",
              question: {
                id: "q-of-2",
                type: "short_answer",
                prompt: "Name one strategy to reduce overfitting.",
                acceptedAnswers: [
                  "regularization",
                  "more training data",
                  "simpler model",
                  "dropout",
                  "early stopping",
                  "cross-validation",
                  "data augmentation",
                ],
                hints: ["Think: constrain capacity, or show more varied examples."],
                explanation:
                  "Common fixes include regularization, simpler models, more data, early stopping, and careful validation.",
                sourceRefs: src(19, "Mitigations."),
                askConfidence: true,
              },
            },
            {
              id: "o6",
              stage: "application",
              question: {
                id: "q-of-3",
                type: "scenario",
                prompt:
                  "Training loss keeps falling while validation loss rises for many epochs. Best next step?",
                choices: [
                  "Stop / regularize / simplify — likely overfitting",
                  "Train longer with the same setup",
                  "Delete the validation set",
                  "Report training loss as final performance",
                ],
                acceptedAnswers: [
                  "Stop / regularize / simplify — likely overfitting",
                ],
                hints: ["Diverging train/val curves are a warning."],
                explanation:
                  "Rising validation loss with falling training loss suggests overfitting — stop early, regularize, or simplify.",
                sourceRefs: src(19, "Early stopping."),
                askConfidence: true,
              },
            },
            {
              id: "o7",
              stage: "reflect",
              summary:
                "Overfitting is memorization disguised as mastery. Trust the gap between train and unseen performance.",
              strengthsPrompt: "You can diagnose overfitting from curves and metrics.",
              uncertaintyPrompt:
                "Review these ideas with spaced retrieval — mastery is retained performance later, not tonight's score.",
              xp: 45,
            },
          ],
        },
      },
    ],
  };
}

export const SAMPLE_SLIDE_TEXT = `
Machine Learning Lecture — Classification Fundamentals
Slide 4: Accuracy alone is insufficient under class imbalance.
Accuracy = (TP+TN)/(TP+TN+FP+FN). A majority-class classifier can look strong.
Slide 8: Precision = TP/(TP+FP). Recall = TP/(TP+FN).
Slide 11: Confusion matrix organizes TP, FP, FN, TN.
Slide 15: Train/test splits estimate generalization.
Slide 18: Overfitting — memorize training data, fail to generalize.
`;
