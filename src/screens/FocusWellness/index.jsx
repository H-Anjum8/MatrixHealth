import React, { use, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
const wellnessCategories = [
    "💪 Weight Loss",
    "🧠 Mental Wellness",
    "🛌 Better Sleep",
    "🍎 Nutrition & Digestion",
    "💧 Hydration & Energy",
    "😌 Stress Management",
    "⚡ Boost Immunity",
    "🦴 Hormone/Thyroid Balance",
    "🏃‍♀️ Movement & Flexibility",
];

const FocusWellness = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
   const Navigation = useNavigation()
    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => Navigation.goBack()}>
                <Ionicons name="chevron-back" size={18} style={styles.back} />
            </TouchableOpacity>

            {/* Title Section */}
            <Text style={styles.title}>What do you want to focus on first?</Text>
            <Text style={styles.subtitle}>
                Choose the areas you'd like to improve. You can add more later!
            </Text>

            {/* Options Section */}
            <ScrollView contentContainerStyle={styles.categoriesContainer}>
                {wellnessCategories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.category,
                            selectedCategories.includes(category) && styles.categorySelected,
                        ]}
                        onPress={() => toggleCategory(category)}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategories.includes(category) && styles.categoryTextSelected,
                            ]}
                        >
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: 700,
        textAlign: "Left",
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 13,
        fontWeight: 500,
        color: "#666",
        textAlign: "Left",
        marginBottom: 20,
    },
    categoriesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6

    },
    category: {
        paddingVertical: 15,
        paddingHorizontal: 6,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        marginVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    categorySelected: {
        borderColor: "#6A1B9A",
        borderWidth: 2,
        backgroundColor: "#F3E5F5",
    },
    categoryText: {
        fontSize: 11,
        fontWeight: "500",
        color: "#000",
        textAlign: "center",
    },
    categoryTextSelected: {
        fontWeight: "bold",
        color: "#6A1B9A",
    },
    continueButton: {
        backgroundColor: colors.primary,
        paddingVertical: 15,
        borderRadius: 30,
        marginBottom: 20,
        alignItems: "center",
    },
    continueButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    back: {
        color: colors.primary,

    },
    backButton: {
        backgroundColor: colors.secondary,
        width: 30,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        paddingVertical: 6,

    }
});

export default FocusWellness;
