import { SafeAreaView, Text, View } from "react-native";

const Latihan_2 = () => {
  const personalData = [
    { nama: "Andi", usia: 20, course_id: [1, 3] },
    { nama: "Budi", usia: 21, course_id: [2, 1] },
    { nama: "Citra", usia: 22, course_id: [3, 2] },
    { nama: "Dewi", usia: 23, course_id: [3, 1] },
    { nama: "Eka", usia: 24, course_id: [1, 2] },
  ];
  const listCourse = [
    { id: 1, nama: "Pemrograman Web", sks: 3 },
    { id: 2, nama: "Basis Data", sks: 4 },
    { id: 3, nama: "Kalkulus", sks: 2 },
  ];

  return (
    <SafeAreaView>
      <Text>latihan_2</Text>
      {personalData.map((item, index) => (
        <View key={index}>
          <Text>{item.nama}</Text>
          <Text>{item.usia}</Text>
          <Text>
            {item.course_id
              .map((id) => listCourse.find((c) => c.id === id)?.nama)
              .join(", ")}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Latihan_2;
