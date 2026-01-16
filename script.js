function generateWorkout() {
  const workouts = [
    "20 squats\n15 push-ups\n30s plank",
    "30 jumping jacks\n20 lunges\n20 mountain climbers",
    "15 burpees\n20 sit-ups\n30s wall sit",
    "20 clapping push-up\n20 diamond push-up\n30 regular push up",
    "25 alternating jumping lunges\n35 jumping squats\n25 elevated calf raises"
  ];

  const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];

  document.getElementById("workout").innerText = randomWorkout;
}