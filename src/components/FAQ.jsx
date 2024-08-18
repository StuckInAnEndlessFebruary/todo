import React from "react";
import Faqsvg from "./svgs/faq";
const FAQ = () => {
  const faqs = [
    {
      question: "How do I add a new task?",
      answer:
        "To add a new task, enter the task title and due date in the input fields and click the 'add' button.",
    },
    {
      question: "How do I delete a task?",
      answer:
        "To delete a task, click the 'delete' button next to the task you want to remove.",
    },
    {
      question: "How do I mark a task as done?",
      answer:
        "To mark a task as done, click the checkbox next to the task title.",
    },
    {
      question: "How do I sort tasks by due date?",
      answer:
        "To sort tasks by due date, use the sort dropdown menu to select either ascending or descending order.",
    },
    {
      question: "How do I search for a task?",
      answer: "To search for a task, enter the task title in the search bar.",
    },
  ];

  return (
    <div className="flex justify-center items-start p-5">
      <div className="max-w-2xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5 dark:text-gray-200">
          Frequently Asked Questions
        </h1>
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-start dark:bg-gray-600 "
            >
              <div>
                <h2 className="text-xl font-semibold mb-2 dark:text-gray-200">
                  {faq.question}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-10">
        <Faqsvg />
      </div>
    </div>
  );
};

export default FAQ;
