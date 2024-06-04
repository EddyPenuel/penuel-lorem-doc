// 'use strict';

const text = [
  `1. To be successful you don't need to do extraordinary things, you just need to do ordinary things extraordinarily well.`,
  `2. The smallest of disciplines, practiced every day, start an incredible process that can change our lives forever.`,
  `3. The major value in life is not what you get. The major value in life is what you become.`,
  `4. Indecision is the greatest thief of opportunity. `,
  `5. We suffer one of two things. Either the pain of discipline or the pain of regret. You've got to choose discipline, versus regret, because discipline weighs ounces and regret weighs tons.`,
  `6. Discipline is the bridge between goals and accomplishment.`,
  `7.  Work hard at your job and you can make a living. Work hard on yourself and you can make a fortune.`,
  `8. There are two ways to face the future. One way is with apprehension; the other is with anticipation`,
  `9. We can have more than we've got because we can become more than we are.`,
   `10. If you don't change what you are doing today, all of your tomorrows will look like yesterday.`,
  `11. Don't wish it was easier, wish you were better. Don't wish for less problems, wish for more skills. Don't wish for less challenges, wish for more wisdom. The major value in life is not what you get. The major value in life is what you become. Success is not to be pursued; it is to be attracted by the person you become.`,
  `12. If you really want to do something, you'll find a way. If you don't, you'll find an excuse.`,
  `13. For things to change, YOU have to change. For things to get better, YOU have to get better. For things to improve, YOU have to improve. When YOU grow, EVERYTHING in your life grows with you.`,
  `14. Your life does not get better by chance, it gets better by change.`,
  `15. When the why gets stronger, the how gets easier.`,
  `16. Don't let your learning lead to knowledge. Let your learning lead to action.`,
  `17. Focus on the solution, not on the problem.`,
  `18. Take care of your body. It's the only place you have to live.`,
  `19. If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.`,
  `20. The ultimate reason for setting goals is to entice you to become the person it takes to achieve them`,
  `21. Get around people who have something of value to share with you. Their impact will continue to have a significant effect on your life long after they have departed.`,
  `22. You cannot change your destination overnight, but you can change your direction overnight.`,
  `23. You are the average of the five people you spend the most time with. `,
  `24. The more obstacles you face and overcome, the more times you falter and get back on track, the more difficulties you struggle with and conquer, the more resiliency you will naturally develop. There is nothing that can hold you back, if you are resilient.`,
  `25. If you want to have more, you have to become more.
  For things to change, you have to change.
  For things to get better, you have to become better.
  If you improve, everything will improve for you.
  If you grow, your money will grow; your relationships, your health, your business and every external effect will mirror that growth in equal correlation.`,
  `26. Days are expensive. When you spend a day you have one less day to spend. So make sure you spend each one wisely.`,
  `27. You don't get paid for the hour. You get paid for the value you bring to the hour.`,
  `28. You must take personal responsibility. You cannot change the circumstances, the seasons, or the wind, but you can change yourself. That is something you have charge of.`,
  `29. Let others lead small lives, but not you. Let others argue over small things, but not you. Let others cry over small hurts, but not you. Let others leave their future in someone else's hands, but not you.`,
  `30. Excuses are the nails used to build a house of failure.`,

];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  // A click on a form submit button – initiates its submission to the server.

  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 30) {
    result.innerHTML = `<p class="result"> ${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result"> ${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
