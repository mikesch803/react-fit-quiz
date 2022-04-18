import { v4 as uuid } from 'uuid';

export const quiz = [
  {
    _id: uuid(),
    question:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ullam eveniet, laudantium harum! Quam, eos esse?",
    option1: { option:"option 1", answer:true },
    option2: { option:"option 2", answer:false },
    option3: { option:"option 3", answer:false }
  },
  {
    _id: uuid(),
    question:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ullam eveniet, laudantium harum! Quam, eos esse?",
      option1: { option:"option 1", answer:true },
      option2: { option:"option 2", answer:false },
      option3: { option:"option 3", answer:false }
  },
  {
    _id: uuid(),
    question:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ullam eveniet, laudantium harum! Quam, eos esse?",
      option1: { option:"option 1", answer:false },
      option2: { option:"option 2", answer:true },
      option3: { option:"option 3", answer:false }
  },
  {
    _id: uuid(),
    question:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ullam eveniet, laudantium harum! Quam, eos esse?",
      option1: { option:"option 1", answer:false },
      option2: { option:"option 2", answer:false },
      option3: { option:"option 3", answer:true }
  },
  {
    _id: uuid(),
    question:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ullam eveniet, laudantium harum! Quam, eos esse?",
      option1: { option:"option 1", answer:false },
      option2: { option:"option 2", answer:true },
      option3: { option:"option 3", answer:false }
  },
];
