import { View,Text,TextInput,TouchableOpacity, StyleSheet } from "react-native";
import { useState, useEffect, use } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home() {  
    const [value, setValue] = useState("")
    const [animal, setAnimalName] = useState("")

    // เมื่อเปิดให้ฟังก์ชัน loadAnimal ทำงาน
    useEffect(() => {
        loadAnimal()
    },[])

    // ฟังก์ชันบันทึกข้อมูล
    async function saveAnimal(){
       await AsyncStorage.setItem("animal",value)
         setAnimalName(value)
         setValue("")
    }


    // ฟังก์ชันโหลดข้อมูล
    async function loadAnimal(){
        const a = await AsyncStorage.getItem("animal")
        // setAnimalName(a!.toString())
        if(a === ""){
            setAnimalName("")
        }else{
            setAnimalName(a!)
    }
         }
    // สั่งลบข้อมูล
    async function removeAnimal(){
        await AsyncStorage.removeItem("animal")
        setAnimalName("")
    } 

    return (
        <View style={styles.continuer }>
            {/* แสดงข้อความ */}
            <Text>
                Animal : {animal}
            </Text>

            {/* กรอกข้อมูล */}
            <TextInput  style={styles.input}  value={value} onChangeText={setValue}/>


            {/* ปุ่มบันทึก */}
            <TouchableOpacity onPress={saveAnimal} >
                <Text>บันทึก</Text>
            </TouchableOpacity> 

            {/* ปุ่มลบข้อมูล */}
            <TouchableOpacity onPress={removeAnimal} >
                <Text>ลบ</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    continuer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    input:{
        borderWidth:1,
        width:"80%",
        height:36
        
    }
})