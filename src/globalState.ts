let globalName = '';  // Global variable

// Function to update the global variable
export const setGlobalName = (name: string) => {
  globalName = name;
};

// Function to get the current global variable
export const getGlobalName = () => globalName;