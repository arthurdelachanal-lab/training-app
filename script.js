


function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateWorkout() {
  const type = document.getElementById("type").value;
  const difficulty = document.getElementById("difficulty").value;
  const output = document.getElementById("workout");

  // 10+ workouts per combo
  const workouts = {
    legs: {
      easy: [
        "20 squats",
        "15 lunges",
        "30s wall sit",
        "15 calf raises",
        "20 glute bridges",
        "10 step-ups per leg",
        "15 side lunges",
        "10 sumo squats",
        "30s seated leg hold",
        "20 donkey kicks"
      ],
      medium: [
        "30 squats",
        "20 lunges",
        "45s wall sit",
        "25 calf raises",
        "25 glute bridges",
        "15 step-ups per leg",
        "20 side lunges",
        "15 sumo squats",
        "40s seated leg hold",
        "25 donkey kicks"
      ],
      hard: [
        "50 squats",
        "30 jump squats",
        "60s wall sit",
        "40 calf raises",
        "30 glute bridges",
        "20 step-ups per leg",
        "25 side lunges",
        "20 sumo squats",
        "60s seated leg hold",
        "30 donkey kicks"
      ]
    },

    upper: {
      easy: [
        "10 push-ups",
        "20 shoulder taps",
        "10 incline push-ups",
        "15 arm circles",
        "10 tricep dips",
        "15 wall push-ups",
        "20 plank shoulder taps",
        "10 knee push-ups",
        "15 bicep curls (optional weight)",
        "20 seconds plank hold"
      ],
      medium: [
        "20 push-ups",
        "30 shoulder taps",
        "15 incline push-ups",
        "20 arm circles",
        "15 tricep dips",
        "25 wall push-ups",
        "30 plank shoulder taps",
        "20 knee push-ups",
        "15 bicep curls (optional weight)",
        "40s plank hold"
      ],
      hard: [
        "40 push-ups",
        "60 shoulder taps",
        "25 incline push-ups",
        "30 arm circles",
        "20 tricep dips",
        "40 wall push-ups",
        "45 plank shoulder taps",
        "30 knee push-ups",
        "25 bicep curls (optional weight)",
        "60s plank hold"
      ]
    },

    hiit: {
      easy: [
        "30 jumping jacks",
        "20 high knees",
        "10 burpees",
        "15 mountain climbers",
        "20 butt kicks",
        "15 jump squats",
        "10 plank jacks",
        "15 skater jumps",
        "20 seconds sprint in place",
        "10 tuck jumps"
      ],
      medium: [
        "40 jumping jacks",
        "30 high knees",
        "15 burpees",
        "25 mountain climbers",
        "30 butt kicks",
        "20 jump squats",
        "15 plank jacks",
        "20 skater jumps",
        "30s sprint in place",
        "15 tuck jumps"
      ],
      hard: [
        "50 jumping jacks",
        "40 high knees",
        "20 burpees",
        "35 mountain climbers",
        "40 butt kicks",
        "25 jump squats",
        "20 plank jacks",
        "25 skater jumps",
        "45s sprint in place",
        "20 tuck jumps"
      ]
    }
  };

  const chosen = workouts[type][difficulty];

  // pick 3 random unique workouts
  let selected = [];
  while (selected.length < 3) {
    const w = pick(chosen);
    if (!selected.includes(w)) selected.push(w);
  }

  output.innerText = "🔥 Your Workout\n\n" + selected.join("\n");

  // start timer based on difficulty
  if (difficulty === "easy") startTimer(30);
  if (difficulty === "medium") startTimer(45);
  if (difficulty === "hard") startTimer(60);
}