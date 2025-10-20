import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Picker } from "@react-native-picker/picker";
import { RootStackParamList, MenuItem } from "./type";
