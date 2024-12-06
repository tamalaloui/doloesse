// Function that initializes a scene with more complex logic
function initialize$1(scene) {
    if (!scene.isInitialized) {
        scene.isInitialized = true;
        scene.objects = []; // Initialize objects array
        scene.lights = [];  // Initialize lights array
        // Additional setup logic goes here
    }
    return scene;
}

// Wrapper function that delegates to initialize$1
function setupScene(scene) {
    return initialize$1(scene);
}

// Example usage
let myScene = { name: "Game Level 1", isInitialized: false };
let initializedScene = setupScene(myScene);

console.log(initializedScene);
// Output:
// {
//   name: 'Game Level 1',
//   isInitialized: true,
//   objects: [],
//   lights: []
// }
