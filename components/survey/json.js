export const json = {
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "panel",
                    "name": "DadosPessoais",
                    "elements": [
                        {
                            "type": "text",
                            "name": "name",
                            "title": "Name"
                        },
                        {
                            "type": "text",
                            "name": "email",
                            "title": "E-mail",
                            "inputType": "email"
                        },
                        {
                            "type": "text",
                            "name": "birth",
                            "title": "Birth",
                            "inputType": "date"
                        }
                    ],
                    "title": "Personal Data (Optional)"
                }
            ],
            "title": "Personal Data"
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "question1",
                    "title": "What are the key maintenance challenges your organization faces?",
                    "choices": [
                        {
                            "value": 1,
                            "text": "Equipment downtime and breakdowns"
                        },
                        {
                            "value": 2,
                            "text": "Inefficient work order management"
                        },
                        {
                            "value": 3,
                            "text": "Lack of asset visibility and tracking"
                        },
                        {
                            "value": 4,
                            "text": "Compliance and regulatory issues"
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "question2",
                    "title": "How do you currently manage maintenance activities?",
                    "choices": [
                        {
                            "value": 1,
                            "text": "Spreadsheets and manual processes"
                        },
                        {
                            "value": 2,
                            "text": "Basic maintenance software"
                        },
                        {
                            "value": 3,
                            "text": "Pen and paper"
                        },
                        {
                            "value": 4,
                            "text": "No structured system in place"
                        }
                    ]
                },
                {
                    "type": "rating",
                    "name": "question3",
                    "title": "Are you looking for a CMMS solution to improve maintenance efficiency and productivity?",
                    "autoGenerate": false,
                    "rateCount": 4,
                    "rateValues": [
                        {
                            "value": 1,
                            "text": "Disagree"
                        },
                        {
                            "value": 2,
                            "text": "Neutral"
                        },
                        {
                            "value": 3,
                            "text": "Agree"
                        },
                        {
                            "value": 4,
                            "text": "Strongly Agree"
                        }
                    ]
                }
            ],
            "title": "Needs Assessment Survey"
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "question4",
                    "title": "Which features of a CMMS solution are most important to you?",
                    "choices": [
                        {
                            "value": 1,
                            "text": "Asset management"
                        },
                        {
                            "value": 2,
                            "text": "Preventive maintenance scheduling"
                        },
                        {
                            "value": 3,
                            "text": "Work order tracking and management"
                        },
                        {
                            "value": 4,
                            "text": "Reporting and analytics"
                        }
                    ]
                },
                {
                    "type": "ranking",
                    "name": "question5",
                    "title": "Rank the following features in order of importance to your organization.",
                    "choices": [
                        {
                            "value": 1,
                            "text": "Drag and drop work order scheduling"
                        },
                        {
                            "value": 2,
                            "text": "Mobile access and app functionality"
                        },
                        {
                            "value": 3,
                            "text": "Integration with existing systems"
                        },
                        {
                            "value": 4,
                            "text": "Advanced reporting and trend analysis"
                        }
                    ]
                }
            ],
            "title": "Feature Prioritization Survey"
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "rating",
                    "name": "question6",
                    "title": "Rate the ease of use of our CMMS software based on the landing page information.",
                    "autoGenerate": false,
                    "rateCount": 4,
                    "rateValues": [
                        {
                            "value": 1,
                            "text": "Difficult"
                        },
                        {
                            "value": 2,
                            "text": "Neutral"
                        },
                        {
                            "value": 3,
                            "text": "Easy"
                        },
                        {
                            "value": 4,
                            "text": "Very easy"
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "question7",
                    "title": "What specific features or aspects of the interface are appealing to you?",
                    "choices": [
                        {
                            "value": 1,
                            "text": "Intuitive navigation"
                        },
                        {
                            "value": 2,
                            "text": "Clean and modern design"
                        },
                        {
                            "value": 3,
                            "text": "Clearly labeled icons and buttons"
                        },
                        {
                            "value": 4,
                            "text": "Quick access to essential functions"
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "question8",
                    "title": "Is there any element of the user interface that you find confusing or challenging?",
                    "choices": [
                        {
                            "value": 1,
                            "text": "Menu organization"
                        },
                        {
                            "value": 2,
                            "text": "Terminology used"
                        },
                        {
                            "value": 3,
                            "text": "Access to help/documentation"
                        },
                        {
                            "value": 4,
                            "text": "Customization options"
                        }
                    ]
                }
            ],
            "title": "User Experience and Interface Survey"
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "rating",
                    "name": "question9",
                    "title": "How important is integration with existing systems (e.g., ERP, EAM) for your organization when choosing a CMMS solution?",
                    "autoGenerate": false,
                    "rateCount": 4,
                    "rateValues": [
                        {
                            "value": 1,
                            "text": "Not important"
                        },
                        {
                            "value": 2,
                            "text": "Somewhat important"
                        },
                        {
                            "value": 3,
                            "text": "Very important"
                        },
                        {
                            "value": 4,
                            "text": "Extremely important"
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "question10",
                    "title": "Do you anticipate scaling your operations in the near future? If so, what scalability features are crucial for your organization?",
                    "choices": [
                        {
                            "value": 1,
                            "text": "Ability to handle a growing number of assets"
                        },
                        {
                            "value": 2,
                            "text": "Multi-site support and management"
                        },
                        {
                            "value": 3,
                            "text": "Scalable pricing based on usage"
                        },
                        {
                            "value": 4,
                            "text": "Flexible permissions and access control"
                        }
                    ]
                }
            ],
            "title": "Integration and Scalability Survey"
        }
    ],
    "headerView": "advanced"
}