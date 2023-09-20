import { Meal } from '@/models/meal'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      new_meal: Meal | undefined
      statistics: undefined
      meal_details: {
        meal
      }
    }
  }
}

