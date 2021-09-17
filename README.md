# FoodApp2


Design Decisions:

CalScreen:
  Used states to be able to set variables for calories, servings, etc.
  Used fetch with a manually entered FDC ID to return calories.
  Would implement Barcode Scanned FDC ID by cancatenting the ID into the fetch call
  User is able to set the serving amount and it will update the calories real-time.
  
  Attempted to use user input for FDC ID, but it added a little more complexity.
  
  
LoginScreen:
  Tried a couple methods to get google authentication working properly.
  Ultimately got it to work using expo-google-app-auth
  Then added a path navigation to get to the CalScreen.
  Would be easy to change this to navigate to the bar code scanner, and then navigate to the CalScreen
 
 
LoadingScreen:
  I couldn't get this quite to work, but the point of it would to have a smoother path navigation
  
Config:
  This would be to help setup firebase


App:
  This is the main screen that just deals with 


  






