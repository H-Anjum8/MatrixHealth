import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';

const quizData = [
  {
    question: "How would you describe your energy levels?",
    options: ["High and Consistent", "Decent, but Varies", "Low Most of the Time", "Constantly Drained"],
  },
  {
    question: "How well are you sleeping lately?",
    options: ["Great—7+ hours, restful", "Okay, but wake up tired", "Poor—wake up often", "I can’t sleep without help"],
  },
  {
    question: "How often do you feel bloated or have digestive issues?",
    options: ["Rarely", "Sometimes", "A few times a week", "Daily or always"],
  },
  {
    question: "What’s your typical stress level?",
    options: ["Very low—I manage it well", "Moderate—some stress but coping", "High—I feel overwhelmed often", "Extremely high—stress affects my health"],
  },
  {
    question: "Are you currently following any dietary style?",
    options: ["None", "Plant-based / Vegan", "Keto / Low-carb", "Gluten-free / Anti-inflammatory"],
  },
  {
    question: "Do you experience mood swings, anxiety, or low mood?",
    options: ["Rarely or never", "Occasionally", "Frequently", "Almost daily"],
  },
  {
    question: "How active are you physically?",
    options: ["I move regularly / workout 4–5x week", "Light movement / 1–2x week", "Mostly sedentary", "Limited by injury or health issues"],
  },
];

const QuizScreen = ({ navigation, route }) => {
  const { step = 1 } = route.params || {};
  const totalSteps = quizData.length;
  const { question, options } = quizData[step - 1];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    if (!selectedOption) {
      Alert.alert("Please select an option before proceeding.");
      return;
    }
    if (step < totalSteps) {
      navigation.push("QuizScreen", { step: step + 1 });
    } else {
      navigation.navigate("QuizCompleteScreen");
    }
  };

  const handleSkip = () => {
    if (step < totalSteps) {
      navigation.push("QuizScreen", { step: step + 1 });
    } else {
      navigation.navigate("QuizApprovedScreen");
    }
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity
      style={[styles.optionButton, selectedOption === item && styles.selectedOption]}
      onPress={() => setSelectedOption(item)}
    >
      <Text style={selectedOption === item ? styles.selectedText : styles.optionText}>
        {item}
      </Text>
      <View style={[styles.radioCircle, selectedOption === item && styles.radioCircleSelected]}>
        {selectedOption === item && (
          <Ionicons name="checkmark" size={10} color="#fff" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={20} color="#5e2ca5" />
      </TouchableOpacity>

      <Text style={styles.title}>Let's Get Started!</Text>
      <Text style={styles.subtitle}>
        This quick quiz will help us personalize your wellness plan.
      </Text>

      <Text style={styles.stepText}>Step {step} of {totalSteps}</Text>

      <View style={styles.progressContainer}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <View
            key={index}
            style={[styles.progressStep, index < step && styles.progressStepActive]}
          />
        ))}
      </View>

      <Text style={styles.question}>{question}</Text>

      <FlatList
        data={options}
        renderItem={renderOption}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip Question ({totalSteps - step})</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 14, marginBottom: 20, color: '#666' },
  stepText: { fontSize: 14, marginBottom: 10, color: '#555', textAlign: 'center', },
 
  back: {
        color: colors.primary,

    },
  backButton: {
        backgroundColor: colors.secondary,
        width: 30,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:5,
        paddingVertical:6, 
      },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  progressStep: {
    width: 30,
    height: 4,
    backgroundColor: '#eee',
    borderRadius: 50,
    marginHorizontal: 4,
    backgroundColor: colors.secondary,
  },
  progressStepActive: {
    backgroundColor: '#5e2ca5',
  },
  question: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  optionButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: { fontSize: 13, color: '#333' },
  selectedOption: {
    backgroundColor: '#ece4f9',
    borderColor: '#5e2ca5',
  },
  selectedText: { fontSize: 14, color: '#5e2ca5' },
  radioCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#5e2ca5',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  radioCircleSelected: {
    backgroundColor: '#5e2ca5',
    borderColor: '#5e2ca5',
  },
  nextButton: {
    // backgroundColor: '#2C1478',
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  nextButtonText: { color: '#fff', textAlign: 'center', fontSize: 18 },
  skipButton: { marginTop: 10, padding: 14,backgroundColor: colors.secondary,borderRadius: 12, },
  skipText: { textAlign: 'center', color: '#5e2ca5' },
});