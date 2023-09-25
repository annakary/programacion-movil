import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [send, setSend] = useState(false);
    
    const handlePress = () => {
         
      };

    const handleSend = () => {
        // Aquí puedes agregar la lógica de inicio de sesión
        console.log('Email:', email);
        console.log('Send:', send);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter email address"
                placeholderTextColor="#000"
                onChangeText={setEmail}
                value={email}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.linkText}>Login</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {

        top: '40%',
        width: '100%',
        paddingLeft: '20%',
        paddingRight: '20%',
        height: '50%'
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
        marginBottom: 40,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 16,
        fontSize: 16,
    },
    sendButton: {
        backgroundColor: '#6f42c1',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginVertical: 40,
        marginTop: 100,
    },
    sendButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    linkText: {
        textAlign: 'center',
        color: '#0066CC', // Color típico de un enlace
        textDecorationLine: 'underline', // Subrayado para indicar que es un enlace
        marginTop: 20,
    },
});

export default ForgotPassword;
