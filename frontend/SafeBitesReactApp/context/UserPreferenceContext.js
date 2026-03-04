import React, {createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserPreferenceContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    allergies: [],
    dietType: [],
    restrictions: [],
    dietPlan: [],
    medical: [],
    importance: []
  });
useEffect(() => {
  const loadPreferences = async () => {
    try {
      await AsyncStorage.removeItem('userPreferences');
      
      const saved = await AsyncStorage.getItem('userPreferences');
      if (saved) {
        setPreferences(JSON.parse(saved));
      }
    } catch (err) {
      console.log('Failed to load preferences', err);
    }
  };
  loadPreferences();
}, []);

const updatePreference = async (key, value) => {
  setPreferences((prev) => {
    const updated = { ...prev, [key]: value };
    AsyncStorage.setItem('userPreferences', JSON.stringify(updated));
    return updated;
  });
};

const updateManyPreferences = (updates) => {
  setPreferences((prev) => {
    const updated = { ...prev, ...updates };
    AsyncStorage.setItem('userPreferences', JSON.stringify(updated));
    return updated;
  });
};

  return (
    <UserPreferenceContext.Provider value={{ preferences, updatePreference, updateManyPreferences }}>
      {children}
    </UserPreferenceContext.Provider>
  );
};

export const useUserPreferences = () => {
  return useContext(UserPreferenceContext);
};