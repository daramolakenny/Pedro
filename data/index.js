// South East
// North Central
// North East
// South South
// South East
// North East
// South South
// North Central
// North East
// South South
// South South
// South East
// South South
// South West
// South East
// North East
// South East
// North West
// North West
// North West
// North West
// North West
// North Central
// North Central
// South West
// North Central
// North Central
// South West
// South West
// South West
// South West
// North Central
// South South
// North West
// North East
// North East
// North West
// South East
// North Central
// North East
// South South
// South East
// North East
// South South
// North Central
// North East
// South South
// South South
// South East
// South South
// South West
// South East
// North East
// South East
// North West
// North West
// North West
// North West
// North West
// North Central
// North Central
// South West
// North Central
// North Central
// South West
// South West
// South West
// South West
// North Central
// South South
// North West
// North East
// North East
// North West
// North West

const navData = [
    {
        id : "",
        text: "Dashboard",
        url: "/exclusive-report"
    },
    {
        id : "",
        text: "Analysis",
        url: "/exclusive-report"
    },
    {
        id : "",
        text: "News & Report",
        url: "/exclusive-report"
    },
    {
        id : "",
        text: "Exclusive report",
        url: "/exclusive-report"
    },
    {
        id : "",
        text: "Watchlist",
        url: "/watchlist"
    },
    {
        id : "",
        text: "Settings",
        url: "/settings"
    },
]

const state = [
    { 
        value : "abia",
        label : "Abia"
    },
    {
        value: "",
        label : "Abuja"
    },
    {
        value: "",
        level: "Adamawa"
    },
    {
        value: "",
        level: "Akwa Ibom"
    },
    {
        value: "",
        level: "Anambra"
    },
    {
        value: "",
        level: "Bauchi"
    },
    {
        value: "",
        level: "Bayelsa"
    },
    {
        value: "",
        level: "Benue"
    },
    {
        value: "",
        level: "Borno"
    },
    {
        value: "",
        level: "Cross River"
    },
    {
        value: "",
        level: "Delta"
    },
    {
        value: "",
        level: "Ebonyi"
    },
    {
        value: "",
        level: "Edo"
    },
    {
        value: "",
        level: "Ekiti"
    },
    {
        value: "",
        level: "Enugu"
    },
    {
        value: "",
        level: "Gombe"
    },
    {
        value: "",
        level: "Imo"
    },
    {
        value: "",
        level: "Jigawa"
    },
    {
        value: "",
        level: "Kaduna"
    },
    {
        value: "",
        level: "Kano"
    },
    {
        value: "",
        level: "Katsina"
    },
    {
        value: "",
        level: "Kebbi"
    },
    {
        value: "",
        level: "Kogi"
    },
    {
        value: "",
        level: "Kwara"
    },
    {
        value: "",
        level: "Lagos"
    },
    {
        value: "",
        level: "Nasarawa"
    },
    {
        value: "",
        level: "Niger"
    },
    {
        value: "",
        level: "Ogun"
    },
    {
        value: "",
        level: "Ondo"
    },
    {
        value: "",
        level: "Osun"
    },
    {
        value: "",
        level: "Oyo"
    },
    {
        value: "",
        level: "Plateau"
    },
    {
        value: "",
        level: "Rivers"
    },
    {
        value: "",
        level: "Sokoto"
    },
    {
        value: "",
        level: "Taraba"
    },
    {
        value: "",
        level: "Yobe"
    },
    {
        value: "",
        level: "Zamfara"
    },
]

export default state;

export const fuelData = [
    { State: "Abia", Period: "2024-11-30", AGO: 1205.63, PMS: 1159.38, DPK: 1342.86, LPG: 1300, Region: "South East" },
    { State: "Abuja", Period: "2024-11-30", AGO: 1352.86, PMS: 1084.44, DPK: 1150, LPG: 1291.67, Region: "North Central" },
    { State: "Adamawa", Period: "2024-11-30", AGO: 1205, PMS: 1161.67, DPK: 1399.44, LPG: 1325.56, Region: "North East" },
    { State: "Akwa Ibom", Period: "2024-11-30", AGO: 1189.43, PMS: 1119.38, DPK: 1375, LPG: 1368.57, Region: "South South" },
    { State: "Anambra", Period: "2024-11-30", AGO: 1264.29, PMS: 1141.25, DPK: 1400, LPG: 1500, Region: "South East" },
    { State: "Bauchi", Period: "2024-11-30", AGO: 1302.14, PMS: 1197.5, DPK: 1457.14, LPG: 1400, Region: "North East" },
    { State: "Bayelsa", Period: "2024-11-30", AGO: 1222, PMS: 1150, DPK: 1400, LPG: 1351.67, Region: "South South" },
    { State: "Benue", Period: "2024-11-30", AGO: 1185, PMS: 1152.78, DPK: 1500, LPG: 1450, Region: "North Central" },
    { State: "Borno", Period: "2024-11-30", AGO: 1209.44, PMS: 1181.44, DPK: 1475, LPG: 1333.33, Region: "North East" },
    { State: "Cross River", Period: "2024-11-30", AGO: 1182.5, PMS: 1160.75, DPK: 1200, LPG: 1180, Region: "South South" },
    { State: "Delta", Period: "2024-11-30", AGO: 1217.5, PMS: 1167.5, DPK: 1480, LPG: 1342.86, Region: "South South" },
    { State: "Ebonyi", Period: "2024-11-30", AGO: 1181.67, PMS: 1197.5, DPK: 1500, LPG: 1290, Region: "South East" },
    { State: "Edo", Period: "2024-11-30", AGO: 1390, PMS: 1146.25, DPK: 1237.5, LPG: 1437.5, Region: "South South" },
    { State: "Ekiti", Period: "2024-11-30", AGO: 1227.78, PMS: 1117.78, DPK: 1438.29, LPG: 1408.33, Region: "South West" },
    { State: "Enugu", Period: "2024-11-30", AGO: 1231.88, PMS: 1161.25, DPK: 1321.43, LPG: 1425, Region: "South East" },
    { State: "Gombe", Period: "2024-11-30", AGO: 1186.25, PMS: 1136, DPK: 1443.75, LPG: 1381.25, Region: "North East" },
    { State: "Imo", Period: "2024-11-30", AGO: 1225, PMS: 1160.63, DPK: 1347.14, LPG: 1387.5, Region: "South East" },
    { State: "Jigawa", Period: "2024-11-30", AGO: 1270, PMS: 1142.22, DPK: 1425, LPG: 1460, Region: "North West" },
    { State: "Kaduna", Period: "2024-11-30", AGO: 1214.44, PMS: 1122.22, DPK: 1300, LPG: 1266.25, Region: "North West" },
    { State: "Kano", Period: "2024-11-30", AGO: 1277.14, PMS: 1174.88, DPK: 1400, LPG: 1350, Region: "North West" },
    { State: "Katsina", Period: "2024-11-30", AGO: 1194.29, PMS: 1113.75, DPK: 1321.43, LPG: 1376, Region: "North West" },
    { State: "Kebbi", Period: "2024-11-30", AGO: 1272.86, PMS: 1181.25, DPK: 1400, LPG: 1350, Region: "North West" },
    { State: "Kogi", Period: "2024-11-30", AGO: 1170.63, PMS: 1106.88, DPK: 1425, LPG: 1362.5, Region: "North Central" },
    { State: "Kwara", Period: "2024-11-30", AGO: 1275, PMS: 1276.25, DPK: 1225, LPG: 1300, Region: "North Central" },
    { State: "Lagos", Period: "2024-11-30", AGO: 1147.39, PMS: 1060.27, DPK: 1475, LPG: 1216.92, Region: "South West" },
    { State: "Nasarawa", Period: "2024-11-30", AGO: 1185, PMS: 1135, DPK: 1500, LPG: 1300, Region: "North Central" },
    { State: "Niger", Period: "2024-11-30", AGO: 1172, PMS: 1106.25, DPK: 1400, LPG: 1397, Region: "North Central" },
    { State: "Ogun", Period: "2024-11-30", AGO: 1160, PMS: 1061.56, DPK: 1350, LPG: 1314.29, Region: "South West" },
    { State: "Ondo", Period: "2024-11-30", AGO: 1325, PMS: 1162.5, DPK: 1190, LPG: 1530, Region: "South West" },
    { State: "Osun", Period: "2024-11-30", AGO: 1171, PMS: 1085.63, DPK: 1191, LPG: 1425.71, Region: "South West" },
    { State: "Oyo", Period: "2024-11-30", AGO: 1149.5, PMS: 1059.38, DPK: 1310, LPG: 1357.5, Region: "South West" },
    { State: "Plateau", Period: "2024-11-30", AGO: 1394.44, PMS: 1155.56, DPK: 1311.11, LPG: 1316.67, Region: "North Central" },
    { State: "Rivers", Period: "2024-11-30", AGO: 1341.67, PMS: 1166.25, DPK: 1160, LPG: 1530, Region: "South South" },
    { State: "Sokoto", Period: "2024-11-30", AGO: 1222.86, PMS: 1142.86, DPK: 1300, LPG: 1282.5, Region: "North West" },
    { State: "Taraba", Period: "2024-11-30", AGO: 1215.56, PMS: 1142.56, DPK: 1581.25, LPG: 1337.5, Region: "North East" },
    { State: "Yobe", Period: "2024-11-30", AGO: 1270, PMS: 1153.33, DPK: 1348.89, LPG: 1196.11, Region: "North East" },
    { State: "Zamfara", Period: "2024-11-30", AGO: 1255, PMS: 1181.25, DPK: 1200, LPG: 1276.25, Region: "North West" }
  ];

// State	Period	AGO	PMS	DPK	LPG	Region
// Abia	2024-11-30	1205.63	1159.38	1342.86	1300	South East
// Abuja	2024-11-30	1352.86	1084.44	1150	1291.67	North Central
// Adamawa	2024-11-30	1205	1161.67	1399.44	1325.56	North East
// Akwa Ibom	2024-11-30	1189.43	1119.38	1375	1368.57	South South
// Anambra	2024-11-30	1264.29	1141.25	1400	1500	South East
// Bauchi	2024-11-30	1302.14	1197.5	1457.14	1400	North East
// Bayelsa	2024-11-30	1222	1150	1400	1351.67	South South
// Benue	2024-11-30	1185	1152.78	1500	1450	North Central
// Borno	2024-11-30	1209.44	1181.44	1475	1333.33	North East
// Cross River	2024-11-30	1182.5	1160.75	1200	1180	South South
// Delta	2024-11-30	1217.5	1167.5	1480	1342.86	South South
// Ebonyi	2024-11-30	1181.67	1197.5	1500	1290	South East
// Edo	2024-11-30	1390	1146.25	1237.5	1437.5	South South
// Ekiti	2024-11-30	1227.78	1117.78	1438.29	1408.33	South West
// Enugu	2024-11-30	1231.88	1161.25	1321.43	1425	South East
// Gombe	2024-11-30	1186.25	1136	1443.75	1381.25	North East
// Imo	2024-11-30	1225	1160.63	1347.14	1387.5	South East
// Jigawa	2024-11-30	1270	1142.22	1425	1460	North West
// Kaduna	2024-11-30	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-11-30	1277.14	1174.88	1400	1350	North West
// Katsina	2024-11-30	1194.29	1113.75	1321.43	1376	North West
// Kebbi	2024-11-30	1272.86	1181.25	1400	1350	North West
// Kogi	2024-11-30	1170.63	1106.88	1425	1362.5	North Central
// Kwara	2024-11-30	1275	1276.25	1225	1300	North Central
// Lagos	2024-11-30	1147.39	1060.27	1475	1216.92	South West
// Nasarawa	2024-11-30	1185	1135	1500	1300	North Central
// Niger	2024-11-30	1172	1106.25	1400	1397	North Central
// Ogun	2024-11-30	1160	1061.56	1350	1314.29	South West
// Ondo	2024-11-30	1325	1162.5	1190	1530	South West
// Osun	2024-11-30	1171	1085.63	1191	1425.71	South West
// Oyo	2024-11-30	1149.5	1059.38	1310	1357.5	South West
// Plateau	2024-11-30	1394.44	1155.56	1311.11	1316.67	North Central
// Rivers	2024-11-30	1341.67	1166.25	1160	1530	South South
// Sokoto	2024-11-30	1222.86	1142.86	1300	1282.5	North West
// Taraba	2024-11-30	1215.56	1142.56	1581.25	1337.5	North East
// Yobe	2024-11-30	1270	1153.33	1348.89	1196.11	North East
// Zamfara	2024-11-30	1255	1181.25	1200	1276.25	North West
// Abia	2024-12-01	1208.75	1159.38	1342.86	1337.5	South East
// Abuja	2024-12-01	1340.91	1072.86	1150	1285	North Central
// Adamawa	2024-12-01	1203.89	1161.67	1398.33	1332.22	North East
// Akwa Ibom	2024-12-01	1185.25	1100	1326.67	1387.5	South South
// Anambra	2024-12-01	1282.5	1136.67	1425	1550	South East
// Bauchi	2024-12-01	1302.14	1197.5	1457.14	1400	North East
// Bayelsa	2024-12-01	1222	1150	1400	1351.67	South South
// Benue	2024-12-01	1171.67	1147.27	1500	1450	North Central
// Borno	2024-12-01	1210.63	1187.25	1485.71	1333.33	North East
// Cross River	2024-12-01	1172.5	1160.75	1200	1180	South South
// Delta	2024-12-01	1180	1136.67	1400	1425	South South
// Ebonyi	2024-12-01	1190	1210	1500	1290	South East
// Edo	2024-12-01	1380	1130.5	1210	1470	South South
// Ekiti	2024-12-01	1188.89	1055.56	1437.14	1408.33	South West
// Enugu	2024-12-01	1238.13	1161.25	1321.43	1412.5	South East
// Gombe	2024-12-01	1185.56	1136.44	1450	1377.78	North East
// Imo	2024-12-01	1225	1160.63	1347.14	1387.5	South East
// Jigawa	2024-12-01	1270	1142.22	1425	1460	North West
// Kaduna	2024-12-01	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-01	1272.86	1148.75	1386.67	1350	North West
// Katsina	2024-12-01	1191.43	1101.25	1314.29	1372	North West
// Kebbi	2024-12-01	1265	1144.25	1400	1350	North West
// Kogi	2024-12-01	1154.29	1091.43	1435.71	1357.14	North Central
// Kwara	2024-12-01	1300	1153.75	1225	1300	North Central
// Lagos	2024-12-01	1147.39	1060.27	1475	1216.92	South West
// Nasarawa	2024-12-01	1209.17	1190.63	1500	1333.33	North Central
// Niger	2024-12-01	1172	1106.25	1400	1397	North Central
// Ogun	2024-12-01	1160	1061.56	1354	1329.71	South West
// Ondo	2024-12-01	1380	1152.86	1200	1550	South West
// Osun	2024-12-01	1170	1051.5	1350	0	South West
// Oyo	2024-12-01	1148.25	1063.13	1310	1370	South West
// Plateau	2024-12-01	1394.44	1155.56	1311.11	1316.67	North Central
// Rivers	2024-12-01	1325	1147.14	1187.5	1512.5	South South
// Sokoto	2024-12-01	1225	1140	1300	1286	North West
// Taraba	2024-12-01	1215.56	1142.56	1581.25	1341.25	North East
// Yobe	2024-12-01	1280	1150	1351.11	1194.44	North East
// Zamfara	2024-12-01	1255	1181.25	1200	1276.25	North West
// Abia	2024-12-02	1205.63	1151.25	1328.57	1350	South East
// Abuja	2024-12-02	1340.91	1070.67	1150	1285	North Central
// Adamawa	2024-12-02	1186.67	1156.67	1398.33	1332.22	North East
// Akwa Ibom	2024-12-02	1186.5	1098.33	1400	1375	South South
// Anambra	2024-12-02	1275	1131.11	1416.67	1550	South East
// Bauchi	2024-12-02	1302.14	1197.5	1457.14	1400	North East
// Bayelsa	2024-12-02	1222	1150	1400	1351.67	South South
// Benue	2024-12-02	1185	1140.56	1500	1500	North Central
// Borno	2024-12-02	1209.44	1183.11	1475	1333.33	North East
// Cross River	2024-12-02	1180	1158.13	1200	1180	South South
// Delta	2024-12-02	1211.25	1168.13	1480	1347.14	South South
// Ebonyi	2024-12-02	1190	1210	1500	1290	South East
// Edo	2024-12-02	1400	1145.71	1230	1450	South South
// Ekiti	2024-12-02	1193.33	1058.89	1437.14	1416.67	South West
// Enugu	2024-12-02	1223.75	1161.25	1321.43	1406.25	South East
// Gombe	2024-12-02	1157.78	1117.56	1440	1383.33	North East
// Imo	2024-12-02	1218.75	1159.38	1340	1387.5	South East
// Jigawa	2024-12-02	1240	1133.33	1400	1420	North West
// Kaduna	2024-12-02	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-02	1277.14	1148.75	1386.67	1350	North West
// Katsina	2024-12-02	1191.43	1100	1314.29	1376	North West
// Kebbi	2024-12-02	1268.57	1145.63	1383.33	1400	North West
// Kogi	2024-12-02	1171.88	1101.25	1425	1362.5	North Central
// Kwara	2024-12-02	1300	1153.75	1225	1300	North Central
// Lagos	2024-12-02	1147.69	1060.04	1475	1226.15	South West
// Nasarawa	2024-12-02	1209.17	1169.38	1500	1366.67	North Central
// Niger	2024-12-02	1172	1104.88	1400	1394	North Central
// Ogun	2024-12-02	1160	1061.56	1350	1314.29	South West
// Ondo	2024-12-02	1358.33	1153.75	1180	1530	South West
// Osun	2024-12-02	1178.75	1056	1191	1425.71	South West
// Oyo	2024-12-02	1149.5	1064.38	1310	1370	South West
// Plateau	2024-12-02	1400	1164.25	1331.25	1343.75	North Central
// Rivers	2024-12-02	1336.67	1148.75	1170	1520	South South
// Sokoto	2024-12-02	1225	1140	1300	1286	North West
// Taraba	2024-12-02	1213.75	1136.63	1578.57	1335.71	North East
// Yobe	2024-12-02	1270	1126.11	1343.33	1191.67	North East
// Zamfara	2024-12-02	1255	1181.25	1200	1276.25	North West
// Abia	2024-12-03	1211.88	1151.25	1328.57	1387.5	South East
// Abuja	2024-12-03	1359.09	1074.29	1150	1276.67	North Central
// Adamawa	2024-12-03	1192.78	1161.67	1397.22	1333.33	North East
// Akwa Ibom	2024-12-03	1191.57	1108.75	1371.67	1400	South South
// Anambra	2024-12-03	1273.75	1134.44	1400	1550	South East
// Bauchi	2024-12-03	1302.14	1197.5	1457.14	1400	North East
// Bayelsa	2024-12-03	1222	1150.25	1400	1351.67	South South
// Benue	2024-12-03	1181	1136.5	1500	1500	North Central
// Borno	2024-12-03	1209.44	1181.44	1475	1333.33	North East
// Cross River	2024-12-03	1181.25	1149.38	1200	1180	South South
// Delta	2024-12-03	1212.5	1168.13	1487.5	1345	South South
// Ebonyi	2024-12-03	1181.67	1195	1500	1290	South East
// Edo	2024-12-03	1400	1145.71	1230	1440	South South
// Ekiti	2024-12-03	1191.11	1054.44	1437.14	1391.67	South West
// Enugu	2024-12-03	1223.75	1161.25	1321.43	1418.75	South East
// Gombe	2024-12-03	1176.25	1120	1476.25	1400	North East
// Imo	2024-12-03	1218.75	1160.63	1340	1387.5	South East
// Jigawa	2024-12-03	1270	1142.22	1425	1460	North West
// Kaduna	2024-12-03	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-03	1283.17	1155.71	1353.33	1400	North West
// Katsina	2024-12-03	1191.43	1098.75	1321.43	1376	North West
// Kebbi	2024-12-03	1272.86	1147.5	1380	1400	North West
// Kogi	2024-12-03	1189.75	1103.75	1425	1362.5	North Central
// Kwara	2024-12-03	1300	1153.75	1250	1300	North Central
// Lagos	2024-12-03	1147.69	1059.61	1475	1214.62	South West
// Nasarawa	2024-12-03	1185	1135	1500	1350	North Central
// Niger	2024-12-03	1172	1104.88	1400	1397	North Central
// Ogun	2024-12-03	1170	1055	0	1275	South West
// Ondo	2024-12-03	1392.5	1144.29	1187.5	1520	South West
// Osun	2024-12-03	1178.75	1053.5	1284	1421.43	South West
// Oyo	2024-12-03	1148.63	1056.88	1310	1370	South West
// Plateau	2024-12-03	1400	1163.63	1331.25	1337.5	North Central
// Rivers	2024-12-03	1370	1158.57	1190	1530	South South
// Sokoto	2024-12-03	1225	1140	1300	1286	North West
// Taraba	2024-12-03	1215.56	1136.44	1543.75	1341.25	North East
// Yobe	2024-12-03	1269.44	1136.11	1348.33	1190.56	North East
// Zamfara	2024-12-03	1255	1181.25	1200	1276.25	North West
// Abia	2024-12-04	1205.63	1151.25	1328.57	1337.5	South East
// Abuja	2024-12-04	1354.55	1074.29	1150	1276.67	North Central
// Adamawa	2024-12-04	1199.44	1152.78	1397.22	1334.44	North East
// Akwa Ibom	2024-12-04	1188.71	1108.75	1371.67	1400	South South
// Anambra	2024-12-04	1275	1120	0	0	South East
// Bauchi	2024-12-04	1302.14	1197.5	1457.14	1400	North East
// Bayelsa	2024-12-04	1222	1150.25	1400	1351.67	South South
// Benue	2024-12-04	1181	1137.22	1500	1500	North Central
// Borno	2024-12-04	1209.44	1182	1475	1333.33	North East
// Cross River	2024-12-04	1181.43	1167.86	1200	1180	South South
// Delta	2024-12-04	1211.25	1170	1480	1344.29	South South
// Ebonyi	2024-12-04	1181.67	1195	1500	1290	South East
// Edo	2024-12-04	1400	1145.71	1230	1440	South South
// Ekiti	2024-12-04	1191.11	1054.44	1437.14	1416.67	South West
// Enugu	2024-12-04	1223.75	1161.25	1321.43	1400	South East
// Gombe	2024-12-04	1172.22	1117.56	1445.56	1377.78	North East
// Imo	2024-12-04	1218.75	1154.38	1340	1381.25	South East
// Jigawa	2024-12-04	1270	1142.22	1425	1460	North West
// Kaduna	2024-12-04	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-04	1273.57	1146.25	1326.67	1450	North West
// Katsina	2024-12-04	1191.43	1098.75	1321.43	1376	North West
// Kebbi	2024-12-04	1271.43	1136.75	1343.33	1425	North West
// Kogi	2024-12-04	1192.71	1090	1428.57	1364.29	North Central
// Kwara	2024-12-04	1300	1153.75	1225	1300	North Central
// Lagos	2024-12-04	1146.29	1059.5	1475	1214.62	South West
// Nasarawa	2024-12-04	1209.17	1169.38	1500	1366.67	North Central
// Niger	2024-12-04	1172	1104.88	1400	1397	North Central
// Ogun	2024-12-04	1160	1060.31	1350	1314.29	South West
// Ondo	2024-12-04	1378.33	1151.25	1200	1530	South West
// Osun	2024-12-04	1178.75	1053.5	1284	1425.71	South West
// Oyo	2024-12-04	1148.75	1059.38	1310	1370	South West
// Plateau	2024-12-04	1394.44	1152.11	1311.11	1322.22	North Central
// Rivers	2024-12-04	1384	1157.5	1200	1530	South South
// Sokoto	2024-12-04	1225	1140	1300	1286	North West
// Taraba	2024-12-04	1215.56	1140	1543.75	1345	North East
// Yobe	2024-12-04	1272.22	1147.78	1348.33	1193.89	North East
// Zamfara	2024-12-04	1255	1185	1200	1336.25	North West
// Abia	2024-12-05	1209.38	1151.25	1328.57	1300	South East
// Abuja	2024-12-05	1321.29	1073.46	1150	1276.67	North Central
// Adamawa	2024-12-05	1176.67	1145.56	1395	1334.44	North East
// Akwa Ibom	2024-12-05	1188.71	1108.75	1363.33	1407.14	South South
// Anambra	2024-12-05	1282.5	1134.44	1400	1450	South East
// Bauchi	2024-12-05	1302.14	1197.5	1457.14	1350	North East
// Bayelsa	2024-12-05	1222	1150	1400	1316.67	South South
// Benue	2024-12-05	1181	1127.22	1500	1500	North Central
// Borno	2024-12-05	1209.44	1182.56	1475	1333.33	North East
// Cross River	2024-12-05	1182.5	1159.38	1200	1180	South South
// Delta	2024-12-05	1206	1158	1466.67	1332.5	South South
// Ebonyi	2024-12-05	1181.67	1195	1500	1290	South East
// Edo	2024-12-05	1400	1136.43	1230	1430	South South
// Ekiti	2024-12-05	1193.33	1061.11	1437.14	1416.67	South West
// Enugu	2024-12-05	1211.25	1173.75	1321.43	1406.25	South East
// Gombe	2024-12-05	1172.22	1117.56	1445.56	1377.78	North East
// Imo	2024-12-05	1218.75	1154.38	1342.86	1385	South East
// Jigawa	2024-12-05	1270	1142.22	1425	1460	North West
// Kaduna	2024-12-05	1208.89	1122.22	1300	1266.25	North West
// Kano	2024-12-05	1272.86	1146.25	1360	1425	North West
// Katsina	2024-12-05	1191.43	1097.5	1321.43	1376	North West
// Kebbi	2024-12-05	1270	1135.63	1345	1400	North West
// Kogi	2024-12-05	1220.25	1101	1412.5	1376.13	North Central
// Kwara	2024-12-05	1300	1153.75	1225	1500	North Central
// Lagos	2024-12-05	1146.47	1055.56	1475	1213.46	South West
// Nasarawa	2024-12-05	1209.17	1101.25	1500	1366.67	North Central
// Niger	2024-12-05	1172	1104.88	1400	1397	North Central
// Ogun	2024-12-05	1160	1060.31	1350	1314.29	South West
// Ondo	2024-12-05	1328	1151.25	1200	1530	South West
// Osun	2024-12-05	1178.75	1053.5	1284	1425.71	South West
// Oyo	2024-12-05	1149.25	1060.63	1310	1370	South West
// Plateau	2024-12-05	1383.33	1128.33	1266.67	1283.33	North Central
// Rivers	2024-12-05	1340	1150	1200	1537.5	South South
// Sokoto	2024-12-05	1225	1140	1300	1286	North West
// Taraba	2024-12-05	1215.56	1140.89	1550	1345	North East
// Yobe	2024-12-05	1377.78	1131.11	1367.78	1193.89	North East
// Zamfara	2024-12-05	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-06	1209.38	1151.25	1328.57	1300	South East
// Abuja	2024-12-06	1268	1078.5	1150	1450	North Central
// Adamawa	2024-12-06	1176.11	1136.11	1389.44	1332.22	North East
// Akwa Ibom	2024-12-06	1188.71	1108.75	1371.67	1400	South South
// Anambra	2024-12-06	1287.5	1133.33	1450	1550	South East
// Bauchi	2024-12-06	1302.14	1197.5	1457.14	1335.71	North East
// Bayelsa	2024-12-06	1222	1148.75	1400	1316.67	South South
// Benue	2024-12-06	1181	1135	1500	1500	North Central
// Borno	2024-12-06	1209.44	1182.56	1475	1333.33	North East
// Cross River	2024-12-06	1182.5	1159.38	1196	1184	South South
// Delta	2024-12-06	1216.25	1167.5	1480	1342.86	South South
// Ebonyi	2024-12-06	1181.67	1195	1500	1290	South East
// Edo	2024-12-06	1400	1160	1230	1430	South South
// Ekiti	2024-12-06	1191.11	1066.67	1437.14	1416.67	South West
// Enugu	2024-12-06	1223.75	1161.25	1321.43	1400	South East
// Gombe	2024-12-06	1171.11	1116.44	1418.89	1383.33	North East
// Imo	2024-12-06	1218.75	1154.38	1340	1387.5	South East
// Jigawa	2024-12-06	1270	1142.22	1425	1460	North West
// Kaduna	2024-12-06	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-06	1274.29	1148.13	1300	1450	North West
// Katsina	2024-12-06	1191.43	1091.25	1321.43	1376	North West
// Kebbi	2024-12-06	1275.71	1146.5	1350	1450	North West
// Kogi	2024-12-06	1206.63	1093.88	1425	1362.5	North Central
// Kwara	2024-12-06	1300	1153.75	1225	1400	North Central
// Lagos	2024-12-06	1147.11	1055.86	1475	1213.46	South West
// Nasarawa	2024-12-06	1164.33	1063.33	1500	1300	North Central
// Niger	2024-12-06	1172	1104.88	1400	1397	North Central
// Ogun	2024-12-06	1160	1060.31	1350	1314.29	South West
// Ondo	2024-12-06	1328.33	1161.43	1190	1520	South West
// Osun	2024-12-06	1178.57	1053.29	1284	1438.33	South West
// Oyo	2024-12-06	1149.5	1061.88	1310	1370	South West
// Plateau	2024-12-06	1394.44	1345.56	1311.11	1333.33	North Central
// Rivers	2024-12-06	1306.67	1153.75	1190	1540	South South
// Sokoto	2024-12-06	1225	1140	1300	1286	North West
// Taraba	2024-12-06	1215.56	1140.89	1550	1345	North East
// Yobe	2024-12-06	1391.25	1141.25	1356.25	1193.13	North East
// Zamfara	2024-12-06	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-07	1209.38	1151.25	1328.57	1312.5	South East
// Abuja	2024-12-07	1338.89	1066.79	1150	1276.67	North Central
// Adamawa	2024-12-07	1176.11	1136.11	1392.22	1332.22	North East
// Akwa Ibom	2024-12-07	1193	1107.5	1371.67	1400	South South
// Anambra	2024-12-07	1287.5	1161.11	1400	1550	South East
// Bauchi	2024-12-07	1287.86	1197.5	1457.14	1335.71	North East
// Bayelsa	2024-12-07	1222	1135.63	1400	1316.67	South South
// Benue	2024-12-07	1181	1135	1500	1500	North Central
// Borno	2024-12-07	1209.44	1180.89	1475	1433.33	North East
// Cross River	2024-12-07	1185	1159.38	1200	1180	South South
// Delta	2024-12-07	1216.25	1168.75	1484	1340	South South
// Ebonyi	2024-12-07	1181.67	1195	1500	1290	South East
// Edo	2024-12-07	1400	1160	1233.33	1441.67	South South
// Ekiti	2024-12-07	1191.67	1066.67	1437.14	1416.67	South West
// Enugu	2024-12-07	1223.75	1161.25	1322.57	1400	South East
// Gombe	2024-12-07	1171.11	1116.44	1413.33	1388.89	North East
// Imo	2024-12-07	1218.75	1154.38	1340	1387.5	South East
// Jigawa	2024-12-07	1255	1142.22	1425	1460	North West
// Kaduna	2024-12-07	1213	1120	1300	1264.44	North West
// Kano	2024-12-07	1278.57	1148.13	1325	1475	North West
// Katsina	2024-12-07	1191.43	1093.75	1307.14	1378	North West
// Kebbi	2024-12-07	1275	1147.13	1343.33	1450	North West
// Kogi	2024-12-07	1197	1091.63	3056.38	1381.25	North Central
// Kwara	2024-12-07	1300	1153.75	1225	1400	North Central
// Lagos	2024-12-07	1147.11	1054.6	1475	1213.46	South West
// Nasarawa	2024-12-07	1170.83	1098.13	1500	1366.67	North Central
// Niger	2024-12-07	1172	1104.88	1400	1397	North Central
// Ogun	2024-12-07	1160	1058.5	1350	1314.29	South West
// Ondo	2024-12-07	1298.33	1161.43	1200	1540	South West
// Osun	2024-12-07	1178.75	1055.38	1284	1425.71	South West
// Oyo	2024-12-07	1149.63	1055.63	1310	1370	South West
// Plateau	2024-12-07	1394.44	1152.11	1311.11	1333.33	North Central
// Rivers	2024-12-07	1327.14	1153.75	1200	1540	South South
// Sokoto	2024-12-07	1225	1140	1300	1282	North West
// Taraba	2024-12-07	1215.56	1140.89	1550	1345	North East
// Yobe	2024-12-07	1385.56	1136.67	1366.67	1193.89	North East
// Zamfara	2024-12-07	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-08	1209.38	1151.25	1328.57	1300	South East
// Abuja	2024-12-08	1326.67	1071.92	1150	1276.67	North Central
// Adamawa	2024-12-08	1175	1131.11	1396.11	1333.33	North East
// Akwa Ibom	2024-12-08	1193	1100	1371.67	1385.71	South South
// Anambra	2024-12-08	1282.5	1134.44	1400	1550	South East
// Bauchi	2024-12-08	1302.14	1197.5	1457.14	1335.71	North East
// Bayelsa	2024-12-08	1222	1125.63	1400	1316.67	South South
// Benue	2024-12-08	1181	1135	1500	1500	North Central
// Borno	2024-12-08	1209.44	1182	1475	1400	North East
// Cross River	2024-12-08	1184.29	1156.43	1200	1180	South South
// Delta	2024-12-08	1217.78	1168.89	1486.67	1345	South South
// Ebonyi	2024-12-08	1190	1207.14	1500	1290	South East
// Edo	2024-12-08	1400	1154.29	1233.33	1433.33	South South
// Ekiti	2024-12-08	1191.11	1064.44	1438.29	1416.67	South West
// Enugu	2024-12-08	1223.75	1161.25	1321.43	1400	South East
// Gombe	2024-12-08	1171.11	1116.44	1418.89	1377.78	North East
// Imo	2024-12-08	1225	1155.63	1351.43	1387.5	South East
// Jigawa	2024-12-08	1270	1115.56	1425	1460	North West
// Kaduna	2024-12-08	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-08	1278.57	1159.38	1350	1475	North West
// Katsina	2024-12-08	1191.43	1093.75	1321.43	1380	North West
// Kebbi	2024-12-08	1275	1147.5	1325	1450	North West
// Kogi	2024-12-08	1195.75	1092.88	1425	1368.75	North Central
// Kwara	2024-12-08	1300	1153.75	1225	1400	North Central
// Lagos	2024-12-08	1147.11	1054.6	1475	1213.46	South West
// Nasarawa	2024-12-08	1170.83	1098.13	1500	1366.67	North Central
// Niger	2024-12-08	1172	1104.88	1400	1397	North Central
// Ogun	2024-12-08	1153.75	1057.88	1350	1314.29	South West
// Ondo	2024-12-08	1297.5	1143	1190	1540	South West
// Osun	2024-12-08	1178.75	1055.38	1284	1425.71	South West
// Oyo	2024-12-08	1144.63	1064.38	1310	1370	South West
// Plateau	2024-12-08	1394.44	1152.11	1311.11	1327.78	North Central
// Rivers	2024-12-08	1308.33	1161.43	1200	1530	South South
// Sokoto	2024-12-08	1225	1140	1300	1286	North West
// Taraba	2024-12-08	1213.75	1132.25	1550	1344.29	North East
// Yobe	2024-12-08	1395	1137.78	1366.67	1191.67	North East
// Zamfara	2024-12-08	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-09	1209.38	1131.88	1317.14	1300	South East
// Abuja	2024-12-09	1332.22	1072.69	1175	1276.67	North Central
// Adamawa	2024-12-09	1175	1142.22	1374.44	1325.56	North East
// Akwa Ibom	2024-12-09	1193	1100	1371.67	1378.57	South South
// Anambra	2024-12-09	1286.25	1134.44	1470	1500	South East
// Bauchi	2024-12-09	1302.14	1197.5	1457.14	1335.71	North East
// Bayelsa	2024-12-09	1222	1127.5	1400	1316.67	South South
// Benue	2024-12-09	1172.86	1125	1500	1500	North Central
// Borno	2024-12-09	1188.33	1141	1450	1400	North East
// Cross River	2024-12-09	1185	1159.38	1200	1180	South South
// Delta	2024-12-09	1216.25	1168.13	1480	1342.86	South South
// Ebonyi	2024-12-09	1190	1207.14	1500	1290	South East
// Edo	2024-12-09	1400	1140	1230	1430	South South
// Ekiti	2024-12-09	1191.11	1062.78	1450	1400	South West
// Enugu	2024-12-09	1221.25	1157.5	1321.43	1387.5	South East
// Gombe	2024-12-09	1171.11	1116.44	1418.89	1383.33	North East
// Imo	2024-12-09	1225	1155.63	1347.14	1387.5	South East
// Jigawa	2024-12-09	1270	1115.56	1425	1460	North West
// Kaduna	2024-12-09	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-09	1277.14	1145	1325	1475	North West
// Katsina	2024-12-09	1191.43	1093.75	1328.57	1378	North West
// Kebbi	2024-12-09	1277.14	1143.13	1350	1475	North West
// Kogi	2024-12-09	1186.38	1104.75	1425	1368.75	North Central
// Kwara	2024-12-09	1300	1153.75	1225	1400	North Central
// Lagos	2024-12-09	1147.94	1054.88	1475	1216.54	South West
// Nasarawa	2024-12-09	1170.83	1098.13	1500	1366.67	North Central
// Niger	2024-12-09	1166	1101.13	1400	1380.83	North Central
// Ogun	2024-12-09	1150	1057.88	1350	1314.29	South West
// Ondo	2024-12-09	1350	1166	1200	1537.5	South West
// Osun	2024-12-09	1180	1055.38	1284	1425.71	South West
// Oyo	2024-12-09	1146.13	1054.38	1310	1370	South West
// Plateau	2024-12-09	1400	1163.63	1331.25	1337.5	North Central
// Rivers	2024-12-09	1292.5	1180	1200	1537.5	South South
// Sokoto	2024-12-09	1225	1140	1300	1286	North West
// Taraba	2024-12-09	1215.56	1133.11	1550	1345	North East
// Yobe	2024-12-09	1396.67	1134.44	1351.67	1195.56	North East
// Zamfara	2024-12-09	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-10	1209.38	1134.38	1302.86	1300	South East
// Abuja	2024-12-10	1280	1075	1150	1350	North Central
// Adamawa	2024-12-10	1171.11	1132.78	1388.89	1333.33	North East
// Akwa Ibom	2024-12-10	1193	1100	1371.67	1378.57	South South
// Anambra	2024-12-10	1276.25	1117.78	1400	1550	South East
// Bauchi	2024-12-10	1302.14	1197.5	1457.14	1335.71	North East
// Bayelsa	2024-12-10	1222	1126.25	1400	1316.67	South South
// Benue	2024-12-10	1181	1135	1500	1500	North Central
// Borno	2024-12-10	1209.44	1183.11	1475	1400	North East
// Cross River	2024-12-10	1185.71	1156.43	1200	1180	South South
// Delta	2024-12-10	1212.5	1168.13	1480	1342.86	South South
// Ebonyi	2024-12-10	1181.67	1195	1500	1290	South East
// Edo	2024-12-10	1400	1136.67	1212.5	1425	South South
// Ekiti	2024-12-10	1191.11	1062.22	1437.14	1416.67	South West
// Enugu	2024-12-10	1221.25	1157.5	1321.43	1400	South East
// Gombe	2024-12-10	1171.11	1116.44	1418.89	1383.33	North East
// Imo	2024-12-10	1218.75	1154.38	1340	1387.5	South East
// Jigawa	2024-12-10	1270	1115.56	1425	1460	North West
// Kaduna	2024-12-10	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-10	1280	1139.38	1350	1450	North West
// Katsina	2024-12-10	1191.43	1090	1321.43	1370	North West
// Kebbi	2024-12-10	1276.43	1142.5	1333.33	1475	North West
// Kogi	2024-12-10	1196.38	1091.63	1425	1368.75	North Central
// Kwara	2024-12-10	1300	1153.75	1225	1400	North Central
// Lagos	2024-12-10	1148.35	1053.6	1475	1222.69	South West
// Nasarawa	2024-12-10	1170.83	1098.13	1500	1366.67	North Central
// Niger	2024-12-10	1160	1091.43	1400	1347	North Central
// Ogun	2024-12-10	1153.75	1057.88	1350	1314.29	South West
// Ondo	2024-12-10	1330	1136.67	1200	1550	South West
// Osun	2024-12-10	1178.75	1055.38	1284	1425.71	South West
// Oyo	2024-12-10	1154.71	1059.29	1310	1385.71	South West
// Plateau	2024-12-10	1394.44	1152.11	1311.11	1311.11	North Central
// Rivers	2024-12-10	1286.67	1161.43	1200	1540	South South
// Sokoto	2024-12-10	1222.22	1137.78	1341.67	1288.33	North West
// Taraba	2024-12-10	1217.5	1131	1550	1351.43	North East
// Yobe	2024-12-10	1394.44	1149.44	1356.67	1196.11	North East
// Zamfara	2024-12-10	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-11	1209.38	1131.88	1317.14	1300	South East
// Abuja	2024-12-11	1190	1063.33	1150	1400	North Central
// Adamawa	2024-12-11	1171.11	1132.78	1390	1332.22	North East
// Akwa Ibom	2024-12-11	1193	1100	1371.67	1378.57	South South
// Anambra	2024-12-11	1278.75	1118.89	1450	1500	South East
// Bauchi	2024-12-11	1302.14	1197.5	1457.14	1335.71	North East
// Bayelsa	2024-12-11	1222	1124.38	1400	1316.67	South South
// Benue	2024-12-11	1181	1140.5	1500	1500	North Central
// Borno	2024-12-11	1209.44	1181.44	1475	1400	North East
// Cross River	2024-12-11	1260	1068.75	1200	1300	South South
// Delta	2024-12-11	1215	1167.5	1480	1342.86	South South
// Ebonyi	2024-12-11	1181.67	1195	1500	1290	South East
// Edo	2024-12-11	1400	1145.71	1230	1430	South South
// Ekiti	2024-12-11	1191.11	1060	1325.71	1416.67	South West
// Enugu	2024-12-11	1221.25	1157.5	1321.43	1400	South East
// Gombe	2024-12-11	1170	1116.44	1418.89	1383.33	North East
// Imo	2024-12-11	1218.75	1154.38	1340	1387.5	South East
// Jigawa	2024-12-11	1270	1115.56	1425	1460	North West
// Kaduna	2024-12-11	1214.44	1117.78	1300	1266.25	North West
// Kano	2024-12-11	1277.14	1146.25	1330	1475	North West
// Katsina	2024-12-11	1191.43	1092.5	1321.43	1380	North West
// Kebbi	2024-12-11	1274.14	1145.63	1340	1475	North West
// Kogi	2024-12-11	1164.13	1082.88	1418.75	1371.88	North Central
// Kwara	2024-12-11	1300	1153.75	1225	1400	North Central
// Lagos	2024-12-11	1148.35	1053.5	1475	1235	South West
// Nasarawa	2024-12-11	1170.83	1098.13	1500	1366.67	North Central
// Niger	2024-12-11	1142	1090	1400	1347.5	North Central
// Ogun	2024-12-11	1153.75	1057.88	1350	1314.29	South West
// Ondo	2024-12-11	1294	1147.14	1200	1550	South West
// Osun	2024-12-11	1178.75	1057.88	1284	1433.33	South West
// Oyo	2024-12-11	1149.63	1051.25	1310	1370	South West
// Plateau	2024-12-11	1394.44	1152.11	1311.11	1322.22	North Central
// Rivers	2024-12-11	1290	1155	1200	1525	South South
// Sokoto	2024-12-11	1225	1140	1300	1286	North West
// Taraba	2024-12-11	1213.33	1123.89	1550	1345	North East
// Yobe	2024-12-11	1395.56	1140	1360.56	1193.89	North East
// Zamfara	2024-12-11	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-12	1209.38	1131.88	1317.14	1300	South East
// Abuja	2024-12-12	1302.5	1075	1150	1260	North Central
// Adamawa	2024-12-12	1174.44	1135	1388.89	1332.22	North East
// Akwa Ibom	2024-12-12	1193	1100	1371.67	1374.29	South South
// Anambra	2024-12-12	1281.11	1120	1408.33	1480	South East
// Bauchi	2024-12-12	1302.14	1197.5	1457.14	1335.71	North East
// Bayelsa	2024-12-12	1222	1125.63	1400	1316.67	South South
// Benue	2024-12-12	1181	1133.89	1500	1500	North Central
// Borno	2024-12-12	1209.44	1182	1475	1400	North East
// Cross River	2024-12-12	1260	1070	1200	1300	South South
// Delta	2024-12-12	1212.5	1167.5	1480	1337.14	South South
// Ebonyi	2024-12-12	1181.67	1195	1500	1290	South East
// Edo	2024-12-12	1400	1136.67	1225	1425	South South
// Ekiti	2024-12-12	1191.11	1058.89	1401.43	1400	South West
// Enugu	2024-12-12	1221.25	1158.75	1321.43	1400	South East
// Gombe	2024-12-12	1171.11	1116.44	1418.89	1383.33	North East
// Imo	2024-12-12	1218.75	1154.38	1340	1387.5	South East
// Jigawa	2024-12-12	1270	1114.44	1425	1455	North West
// Kaduna	2024-12-12	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-12	1278.29	1146.25	1325	1475	North West
// Katsina	2024-12-12	1191.43	1080	1321.43	1380	North West
// Kebbi	2024-12-12	1274.29	1143.75	1350	1500	North West
// Kogi	2024-12-12	1177.88	1081	1425	1365.63	North Central
// Kwara	2024-12-12	1300	1153.75	1225	1400	North Central
// Lagos	2024-12-12	1147.94	1053.5	1475	1238.85	South West
// Nasarawa	2024-12-12	1170.83	1098.13	1500	1366.67	North Central
// Niger	2024-12-12	1160	1091.43	1400	1347	North Central
// Ogun	2024-12-12	1149.38	1053	1350	1314.29	South West
// Ondo	2024-12-12	1308	1155	1200	1550	South West
// Osun	2024-12-12	1180	1056.14	1284	1438.33	South West
// Oyo	2024-12-12	1149	1058.13	1310	1370	South West
// Plateau	2024-12-12	1394.44	1152.11	1311.11	1322.22	North Central
// Rivers	2024-12-12	1300	1147.14	1200	1550	South South
// Sokoto	2024-12-12	1225	1140	1300	1286	North West
// Taraba	2024-12-12	1213.33	1123.89	1550	1345	North East
// Yobe	2024-12-12	1392.22	1137.78	1351.67	1193.89	North East
// Zamfara	2024-12-12	1255	1185	1200	1336.25	North West
// Abia	2024-12-13	1209.38	1131.88	1317.14	1300	South East
// Abuja	2024-12-13	1288.57	1082.5	1150	1362.5	North Central
// Adamawa	2024-12-13	1173.33	1137.78	1387.78	1330	North East
// Akwa Ibom	2024-12-13	1193	1098.75	1371.67	1374.29	South South
// Anambra	2024-12-13	1285	1117.78	1433.33	1470	South East
// Bauchi	2024-12-13	1302.14	1197.5	1457.14	1342.86	North East
// Bayelsa	2024-12-13	1222	1125.63	1400	1316.67	South South
// Benue	2024-12-13	1181	1133.89	1500	1500	North Central
// Borno	2024-12-13	1209.44	1182	1475	1400	North East
// Cross River	2024-12-13	1260	1068.75	1200	1300	South South
// Delta	2024-12-13	1208.57	1162.86	1475	1333.33	South South
// Ebonyi	2024-12-13	1181.67	1195	1500	1290	South East
// Edo	2024-12-13	1400	1160	1216.67	1425	South South
// Ekiti	2024-12-13	1185	1056.25	1283.33	1360	South West
// Enugu	2024-12-13	1221.25	1157.5	1321.43	1400	South East
// Gombe	2024-12-13	1171.11	1113.11	1418.89	1383.33	North East
// Imo	2024-12-13	1225	1160.63	1347.14	1387.5	South East
// Jigawa	2024-12-13	1270	1114.44	1425	1455	North West
// Kaduna	2024-12-13	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-13	1278	1146	1333.33	1500	North West
// Katsina	2024-12-13	1191.43	1085	1321.43	1380	North West
// Kebbi	2024-12-13	1274.29	1141.25	1350	1475	North West
// Kogi	2024-12-13	1175.38	1093.5	1425	1371.25	North Central
// Kwara	2024-12-13	1300	1153.75	1225	1400	North Central
// Lagos	2024-12-13	1147.73	1052.25	1475	1238.08	South West
// Nasarawa	2024-12-13	1170.83	1098.13	1500	1366.67	North Central
// Niger	2024-12-13	1160	1091.43	1400	1347	North Central
// Ogun	2024-12-13	1146.88	1053	1350	1314.29	South West
// Ondo	2024-12-13	1290	1147.14	1200	1537.5	South West
// Osun	2024-12-13	1178.75	1039.38	1284	1418.57	South West
// Oyo	2024-12-13	1150.5	1055.63	1310	1370	South West
// Plateau	2024-12-13	1394.44	1152.11	1311.11	1322.22	North Central
// Rivers	2024-12-13	1298	1147.14	1200	1537.5	South South
// Sokoto	2024-12-13	1225	1137.5	1300	1286	North West
// Taraba	2024-12-13	1213.33	1123.89	1481.25	1345	North East
// Yobe	2024-12-13	1392.22	1136.67	1351.67	1196.11	North East
// Zamfara	2024-12-13	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-14	1209.38	1131.88	1317.14	1300	South East
// Abuja	2024-12-14	1291.11	1066.15	1150	1260	North Central
// Adamawa	2024-12-14	1172.22	1133.33	1388.89	1335.56	North East
// Akwa Ibom	2024-12-14	1193	1096.88	1371.67	1374.29	South South
// Anambra	2024-12-14	1280	1117.78	1440	1483.33	South East
// Bauchi	2024-12-14	1302.14	1197.5	1457.14	1328.57	North East
// Bayelsa	2024-12-14	1222	1125.63	1400	1316.67	South South
// Benue	2024-12-14	1181	1133.89	1500	1500	North Central
// Borno	2024-12-14	1210	1182	1475	1400	North East
// Cross River	2024-12-14	1260	1068.75	1200	1300	South South
// Delta	2024-12-14	1212.5	1167.5	1480	1341.67	South South
// Ebonyi	2024-12-14	1180.33	1195	1500	1290	South East
// Edo	2024-12-14	1400	1160	1225	1425	South South
// Ekiti	2024-12-14	1051.11	1055.56	1280	1341.67	South West
// Enugu	2024-12-14	1221.25	1157.5	1321.43	1400	South East
// Gombe	2024-12-14	1171.11	1112	1418.89	1383.33	North East
// Imo	2024-12-14	1218.75	1154.38	1340	1387.5	South East
// Jigawa	2024-12-14	1270	1114.44	3056.25	1455	North West
// Kaduna	2024-12-14	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-14	1280	1122.78	1350	1475	North West
// Katsina	2024-12-14	1191.43	1085	1178.57	1380	North West
// Kebbi	2024-12-14	1276.57	1142.88	1333.33	1475	North West
// Kogi	2024-12-14	1176.63	1077.88	1425	1368.75	North Central
// Kwara	2024-12-14	1300	1153.75	1225	1400	North Central
// Lagos	2024-12-14	1147.73	1052.25	1475	1238.08	South West
// Nasarawa	2024-12-14	1170.83	1098.13	1500	1366.67	North Central
// Niger	2024-12-14	1142	1090	1400	1347.5	North Central
// Ogun	2024-12-14	1153.33	1051.67	0	1275	South West
// Ondo	2024-12-14	1303.33	1152.5	1200	1550	South West
// Osun	2024-12-14	1161.11	1035.89	1284	1418.57	South West
// Oyo	2024-12-14	1154	1029	1310	1407.5	South West
// Plateau	2024-12-14	1394.44	1152.11	1311.11	1187.22	North Central
// Rivers	2024-12-14	1298	1152.14	1200	1550	South South
// Sokoto	2024-12-14	1225	1140	1300	1286	North West
// Taraba	2024-12-14	1213.33	1123.89	1537.5	1345	North East
// Yobe	2024-12-14	1364.44	1133.33	1352.22	1193.89	North East
// Zamfara	2024-12-14	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-15	1206.88	1130	1318.29	1300	South East
// Abuja	2024-12-15	1286.67	1063.33	1150	1260	North Central
// Adamawa	2024-12-15	1175	1123.89	1388.89	1332.22	North East
// Akwa Ibom	2024-12-15	1193	1096.88	1371.67	1374.29	South South
// Anambra	2024-12-15	1287.5	1120	1412.5	1540	South East
// Bauchi	2024-12-15	1302.14	1197.5	1478.57	1300	North East
// Bayelsa	2024-12-15	1222	1125.63	1400	1316.67	South South
// Benue	2024-12-15	1181	1140.5	1500	1500	North Central
// Borno	2024-12-15	1212.5	1192.5	1475	1400	North East
// Cross River	2024-12-15	1260	1068.75	1200	1300	South South
// Delta	2024-12-15	1205.67	1160	1500	1350	South South
// Ebonyi	2024-12-15	1180.5	1140	1500	1289.5	South East
// Edo	2024-12-15	1400	1150	1233.33	1433.33	South South
// Ekiti	2024-12-15	1186.67	1052.22	1272.86	1333.33	South West
// Enugu	2024-12-15	1208.75	1152.5	1335.71	1400	South East
// Gombe	2024-12-15	1171.11	1112	1418.89	1383.33	North East
// Imo	2024-12-15	1216.25	1151.88	1340	1387.5	South East
// Jigawa	2024-12-15	1270	1114.44	1425	1455	North West
// Kaduna	2024-12-15	1208.89	1122.22	1300	1260	North West
// Kano	2024-12-15	1258	1147	1316.67	1475	North West
// Katsina	2024-12-15	1191.43	1082.5	1321.43	1380	North West
// Kebbi	2024-12-15	1270	1114.29	1325	1475	North West
// Kogi	2024-12-15	1163.5	1078.5	1425	1368.75	North Central
// Kwara	2024-12-15	1266.67	1110	1225	1400	North Central
// Lagos	2024-12-15	1147.73	1052.25	1475	1238.08	South West
// Nasarawa	2024-12-15	1170.83	1098.13	1500	1366.67	North Central
// Niger	2024-12-15	1142	1090	1400	1347.5	North Central
// Ogun	2024-12-15	1149.38	1050.5	1350	1321.43	South West
// Ondo	2024-12-15	1294	1147.14	1200	1550	South West
// Osun	2024-12-15	1160	1036.86	1295	1413.33	South West
// Oyo	2024-12-15	1149.38	1029.63	1310	1407.5	South West
// Plateau	2024-12-15	1394.44	1152.11	1311.11	1211.11	North Central
// Rivers	2024-12-15	1284	1149.29	1200	1537.5	South South
// Sokoto	2024-12-15	1225	1140	1300	1286	North West
// Taraba	2024-12-15	1213.33	1123.89	1537.5	1345	North East
// Yobe	2024-12-15	1388.89	1131.11	1358.33	1192.78	North East
// Zamfara	2024-12-15	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-16	1209.38	1130	1317.14	1300	South East
// Abuja	2024-12-16	1288.57	1074.44	1150	1296	North Central
// Adamawa	2024-12-16	1173.89	1127.78	1380	1331.11	North East
// Akwa Ibom	2024-12-16	1193	1096.88	1371.67	1374.29	South South
// Anambra	2024-12-16	1282.5	1121.11	1430	1520	South East
// Bauchi	2024-12-16	1302.14	1197.5	1457.14	1300	North East
// Bayelsa	2024-12-16	1222	1123.13	1400	1316.67	South South
// Benue	2024-12-16	1185	1116.11	1500	1500	North Central
// Borno	2024-12-16	1209.44	1182	1475	1400	North East
// Cross River	2024-12-16	1260	1068.75	1200	1300	South South
// Delta	2024-12-16	1216.25	1168.75	1480	1341.43	South South
// Ebonyi	2024-12-16	1190	1207.14	1500	1290	South East
// Edo	2024-12-16	1400	1118.57	1225	1425	South South
// Ekiti	2024-12-16	1191.11	1054.44	1285.71	1350	South West
// Enugu	2024-12-16	1217.5	1153.75	1321.43	1400	South East
// Gombe	2024-12-16	1171.11	1108.67	1418.89	1383.33	North East
// Imo	2024-12-16	1216.25	1151.88	1340	1387.5	South East
// Jigawa	2024-12-16	1270	1114.44	1425	1455	North West
// Kaduna	2024-12-16	1214.44	1122.22	1300	1266.25	North West
// Kano	2024-12-16	1255.71	1119.75	1325	1475	North West
// Katsina	2024-12-16	1191.43	1076.88	1321.43	1380	North West
// Kebbi	2024-12-16	1255.71	1128.57	1325	1475	North West
// Kogi	2024-12-16	1177.88	1077.25	1425	1368.75	North Central
// Kwara	2024-12-16	1250	1104.29	1225	1400	North Central
// Lagos	2024-12-16	1145.59	1047.54	1475	1238.08	South West
// Nasarawa	2024-12-16	1170.83	1095.63	1500	1366.67	North Central
// Niger	2024-12-16	1142	1090	1400	1347.5	North Central
// Ogun	2024-12-16	1149.38	1049.88	1350	1321.43	South West
// Ondo	2024-12-16	1298	1147.14	1200	1550	South West
// Osun	2024-12-16	1156.25	1036	1294	1418.57	South West
// Oyo	2024-12-16	1149	1029.63	1310	1357.5	South West
// Plateau	2024-12-16	1394.44	1152.11	1311.11	1322.22	North Central
// Rivers	2024-12-16	1314	1147.14	1200	1537.5	South South
// Sokoto	2024-12-16	1200	1100	1300	1280	North West
// Taraba	2024-12-16	1213.33	1123.89	1537.5	1345	North East
// Yobe	2024-12-16	1380	1117.22	1348.33	1191.11	North East
// Zamfara	2024-12-16	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-17	1202.5	1130	1310	1300	South East
// Abuja	2024-12-17	1274	1072.5	1400	1225	North Central
// Adamawa	2024-12-17	1168.89	1128.89	1377.78	1333.33	North East
// Akwa Ibom	2024-12-17	1193	1097.14	1371.67	1374.29	South South
// Anambra	2024-12-17	1263.75	1118.89	1441.67	1520	South East
// Bauchi	2024-12-17	1302.14	1181.25	1478.57	1300	North East
// Bayelsa	2024-12-17	1222	1123.13	1400	1316.67	South South
// Benue	2024-12-17	1185	1116.11	1500	1500	North Central
// Borno	2024-12-17	1209.44	1182	1475	1400	North East
// Cross River	2024-12-17	1260	1070	1200	1300	South South
// Delta	2024-12-17	1217.5	1168.13	1480	1341.43	South South
// Ebonyi	2024-12-17	1181.67	1195	1500	1290	South East
// Edo	2024-12-17	1400	1121.43	1210	1420	South South
// Ekiti	2024-12-17	1190	1053.75	1283.33	1370	South West
// Enugu	2024-12-17	1220	1151.88	1321.43	1400	South East
// Gombe	2024-12-17	1171.11	1105.56	1418.89	1383.33	North East
// Imo	2024-12-17	1216.25	1151.88	1340	1387.5	South East
// Jigawa	2024-12-17	1270	1114.44	1425	1455	North West
// Kaduna	2024-12-17	1208.89	1121.11	1300	1260	North West
// Kano	2024-12-17	1258.57	1122.5	1325	1500	North West
// Katsina	2024-12-17	1184.29	1076.25	1321.43	1380	North West
// Kebbi	2024-12-17	1255.71	1116.25	1325	1466.67	North West
// Kogi	2024-12-17	1177.63	1078.88	1425	1368.75	North Central
// Kwara	2024-12-17	1250	1085.71	1225	1400	North Central
// Lagos	2024-12-17	1145.18	1048.46	1475	1226.76	South West
// Nasarawa	2024-12-17	1158.33	1085	1500	1350	North Central
// Niger	2024-12-17	1142	1090	1400	1347.5	North Central
// Ogun	2024-12-17	1149.38	1049.88	1350	1321.43	South West
// Ondo	2024-12-17	1294	1142.86	1200	1525	South West
// Osun	2024-12-17	1158.57	1036.14	1294	1418.57	South West
// Oyo	2024-12-17	1148.13	1020.25	1230	1325	South West
// Plateau	2024-12-17	1394.44	1152.11	1311.11	1322.22	North Central
// Rivers	2024-12-17	1298	1143.57	1200	1537.5	South South
// Sokoto	2024-12-17	1203.33	1120	1300	1280	North West
// Taraba	2024-12-17	1213.33	1123.89	1531.25	1345	North East
// Yobe	2024-12-17	1392.22	1129.44	1354.44	1193.89	North East
// Zamfara	2024-12-17	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-18	1202.5	1130	1310	1300	South East
// Abuja	2024-12-18	1280	1070	1400	1225	North Central
// Adamawa	2024-12-18	1168.89	1112.22	1375.56	1333.33	North East
// Akwa Ibom	2024-12-18	1193	1097.14	1371.67	1374.29	South South
// Anambra	2024-12-18	1270	1122.22	1412.5	1533.33	South East
// Bauchi	2024-12-18	1207.5	1083.33	1425	1300	North East
// Bayelsa	2024-12-18	1222	1125	0	1316.67	South South
// Benue	2024-12-18	1185	1093.5	1500	1500	North Central
// Borno	2024-12-18	1209.44	1182	1475	1400	North East
// Cross River	2024-12-18	1200	1100	1400	1400	South South
// Delta	2024-12-18	1215	1167.5	1480	1340	South South
// Ebonyi	2024-12-18	1181.67	1128.75	1500	1290	South East
// Edo	2024-12-18	1400	1110	1225	1425	South South
// Ekiti	2024-12-18	1191.11	1053.33	1285.71	1333.33	South West
// Enugu	2024-12-18	1220	1151.88	1307.14	1400	South East
// Gombe	2024-12-18	1170.56	1104.44	1418.89	1383.33	North East
// Imo	2024-12-18	1222.5	1151.88	1340	1381.25	South East
// Jigawa	2024-12-18	1270	1098	1425	1455	North West
// Kaduna	2024-12-18	1203	1123	1308	1254.22	North West
// Kano	2024-12-18	1258.57	1125	1325	1475	North West
// Katsina	2024-12-18	1177.14	1077.5	1321.43	1380	North West
// Kebbi	2024-12-18	1255.71	1125.63	1325	1475	North West
// Kogi	2024-12-18	1160.13	1073.5	1425	1368.75	North Central
// Kwara	2024-12-18	1250	1093.75	1225	1400	North Central
// Lagos	2024-12-18	1144.18	1046.32	1475	1237.5	South West
// Nasarawa	2024-12-18	1170.83	1095.63	1500	1366.67	North Central
// Niger	2024-12-18	1180	1090	1400	1357	North Central
// Ogun	2024-12-18	1149.38	1049.88	1350	1328.57	South West
// Ondo	2024-12-18	1294	1147.14	1200	1537.5	South West
// Osun	2024-12-18	1149.38	1034.13	1294	1418.57	South West
// Oyo	2024-12-18	1148.86	1020.29	1310	1335.71	South West
// Plateau	2024-12-18	1394.44	1152.11	1311.11	1322.22	North Central
// Rivers	2024-12-18	1294	1149.29	1200	1537.5	South South
// Sokoto	2024-12-18	1213.33	1096.67	1300	1300	North West
// Taraba	2024-12-18	1213.33	1117.22	1537.5	1345	North East
// Yobe	2024-12-18	1387.78	1125.56	1343.89	1193.67	North East
// Zamfara	2024-12-18	1255	1182.5	1200	1336.25	North West
// Abia	2024-12-19	1198.75	1130	1310	1300	South East
// Abuja	2024-12-19	1304	1061.11	1400	1225	North Central
// Adamawa	2024-12-19	1175	1114.44	1378.89	1331.11	North East
// Akwa Ibom	2024-12-19	1193	1093.75	1371.67	1374.29	South South
// Anambra	2024-12-19	1271.25	1117.78	1400	1460	South East
// Bauchi	2024-12-19	1302.14	1181.25	1457.14	1300	North East
// Bayelsa	2024-12-19	1226	1122.5	0	1316.67	South South
// Benue	2024-12-19	1185	1090.56	1500	1500	North Central
// Borno	2024-12-19	1209.44	1181.44	1475	1400	North East
// Cross River	2024-12-19	1250.77	1079.23	1200	1300	South South
// Delta	2024-12-19	1217.14	1170.71	1480	1348.33	South South
// Ebonyi	2024-12-19	1181.67	1128.75	1500	1290	South East
// Edo	2024-12-19	1287.5	1146	1200	1516.67	South South
// Ekiti	2024-12-19	1191.11	1050.56	1285.71	1341.67	South West
// Enugu	2024-12-19	1203.75	1121.25	1321.43	1400	South East
// Gombe	2024-12-19	1170.56	1104.44	1406.67	1400	North East
// Imo	2024-12-19	1216.25	1151.88	1340	1387.5	South East
// Jigawa	2024-12-19	1270	1098.89	1425	1455	North West
// Kaduna	2024-12-19	1208.89	1154.44	1300	1260	North West
// Kano	2024-12-19	1258.57	1125	1325	1475	North West
// Katsina	2024-12-19	1177.86	1080	1314.29	1370	North West
// Kebbi	2024-12-19	1255.71	1122.88	1325	1475	North West
// Kogi	2024-12-19	1164.75	1075.75	1425	1368.75	North Central
// Kwara	2024-12-19	1250	1106.25	1225	1400	North Central
// Lagos	2024-12-19	1143.2	1045.34	1475	1237.5	South West
// Nasarawa	2024-12-19	1170.83	1095.63	1500	1366.67	North Central
// Niger	2024-12-19	1158	1090	1400	1347.5	North Central
// Ogun	2024-12-19	1149.38	1049.88	1350	1328.57	South West
// Ondo	2024-12-19	1287.5	1138.33	1200	1533.33	South West
// Osun	2024-12-19	1151.88	1034.13	1294	1418.57	South West
// Oyo	2024-12-19	1149.88	1024	1310	1337.5	South West
// Plateau	2024-12-19	1394.44	1152.11	1311.11	1316.67	North Central
// Rivers	2024-12-19	1288	1145	1200	1537.5	South South
// Sokoto	2024-12-19	1221.25	1133.75	1300	1286	North West
// Taraba	2024-12-19	1213.33	1117.22	1537.5	1345	North East
// Yobe	2024-12-19	1392.22	1123.89	1351.67	1195	North East
// Zamfara	2024-12-19	1255	1182.5	1200	1336.25	North West
// Abia	2024-12-20	1196.25	1130	1310	1300	South East
// Abuja	2024-12-20	1340	1067.14	1400	1250	North Central
// Adamawa	2024-12-20	1173.33	1114.44	1376.67	1334.44	North East
// Akwa Ibom	2024-12-20	1193	1110	1371.67	1373.71	South South
// Anambra	2024-12-20	1282.5	1096.67	1400	1500	South East
// Bauchi	2024-12-20	1302.14	1181.25	1442.86	1300	North East
// Bayelsa	2024-12-20	1226	1121.25	0	1316.67	South South
// Benue	2024-12-20	1185	1090.56	1500	1500	North Central
// Borno	2024-12-20	1210	1182	1475	1400	North East
// Cross River	2024-12-20	1260	1080	1200	1300	South South
// Delta	2024-12-20	1173	1079.75	1350	1343.33	South South
// Ebonyi	2024-12-20	1181.67	1128.75	1500	1290	South East
// Edo	2024-12-20	1400	1140	1216.67	1433.33	South South
// Ekiti	2024-12-20	1191.11	1050.56	1292.86	1341.67	South West
// Enugu	2024-12-20	1197.5	1121.25	1307.14	1400	South East
// Gombe	2024-12-20	1170.56	1090	1413.33	1377.78	North East
// Imo	2024-12-20	1210	1135	1340	1387.5	South East
// Jigawa	2024-12-20	1270	1098.89	1425	1455	North West
// Kaduna	2024-12-20	1208.89	1121.11	1300	1260	North West
// Kano	2024-12-20	1257.14	1129.75	1325	1475	North West
// Katsina	2024-12-20	1177.14	1077.5	1321.43	1380	North West
// Kebbi	2024-12-20	1255.71	1122.25	1325	1475	North West
// Kogi	2024-12-20	1167.63	1043.88	1425	1368.75	North Central
// Kwara	2024-12-20	1250	1093.75	1225	1400	North Central
// Lagos	2024-12-20	1143.2	1044.96	1475	1237.5	South West
// Nasarawa	2024-12-20	1170.83	1095.63	1500	1366.67	North Central
// Niger	2024-12-20	1142	1090	1400	1347.5	North Central
// Ogun	2024-12-20	1149.38	1049.88	1350	1328.57	South West
// Ondo	2024-12-20	1274	1147.14	1200	1550	South West
// Osun	2024-12-20	1151.88	1034.13	1294	1418.57	South West
// Oyo	2024-12-20	1150.88	1022.75	1310	1343.75	South West
// Plateau	2024-12-20	1393.75	1141.5	1306.25	1312.5	North Central
// Rivers	2024-12-20	1278	1147.86	1200	1537.5	South South
// Sokoto	2024-12-20	1207.5	1125	1300	1286	North West
// Taraba	2024-12-20	1213.33	1102.22	1537.5	1345	North East
// Yobe	2024-12-20	1391	1092.5	1352.8	1196	North East
// Zamfara	2024-12-20	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-21	1196.25	1130	1310	1300	South East
// Abuja	2024-12-21	1340	1061.76	1400	1225	North Central
// Adamawa	2024-12-21	1173.89	1114.44	1375.56	1333.33	North East
// Akwa Ibom	2024-12-21	1181.38	1093.75	1371.67	1374.29	South South
// Anambra	2024-12-21	1276.25	1092.22	1400	1512.5	South East
// Bauchi	2024-12-21	1265.71	1162.86	1444.29	1307.14	North East
// Bayelsa	2024-12-21	1226	1121.25	0	1316.67	South South
// Benue	2024-12-21	1185	1090.56	1500	1500	North Central
// Borno	2024-12-21	1209.44	1181.44	1475	1400	North East
// Cross River	2024-12-21	1230	1076.67	1200	1300	South South
// Delta	2024-12-21	1300	1161.11	1480	1342.86	South South
// Ebonyi	2024-12-21	1181.67	1153.75	1500	1300	South East
// Edo	2024-12-21	1400	1127.14	1216.67	1433.33	South South
// Ekiti	2024-12-21	1191.11	1015.56	1285.71	1341.67	South West
// Enugu	2024-12-21	1197.5	1121.25	1307.14	1400	South East
// Gombe	2024-12-21	1170.56	1086.67	1413.33	1377.78	North East
// Imo	2024-12-21	1198.13	1126.88	1304.29	1393.75	South East
// Jigawa	2024-12-21	1270	1098.89	1425	1455	North West
// Kaduna	2024-12-21	1208.89	1121.11	1300	1260	North West
// Kano	2024-12-21	1252.86	1127.5	1333.33	1475	North West
// Katsina	2024-12-21	1177.14	1076.88	1321.43	1380	North West
// Kebbi	2024-12-21	1254.29	1122	1333.33	1475	North West
// Kogi	2024-12-21	1172.25	1083.13	1425	1368.75	North Central
// Kwara	2024-12-21	1250	1093.75	1225	1400	North Central
// Lagos	2024-12-21	1142.84	1038.09	1475	1237.5	South West
// Nasarawa	2024-12-21	1170.83	1094.38	1500	1366.67	North Central
// Niger	2024-12-21	1158	1090	1400	1347.5	North Central
// Ogun	2024-12-21	1140.63	1046.13	1350	1314.29	South West
// Ondo	2024-12-21	1284	1142.86	1200	1525	South West
// Osun	2024-12-21	1151.88	1034.13	1294	1418.57	South West
// Oyo	2024-12-21	1149.88	1008.25	1310	1337.5	South West
// Plateau	2024-12-21	1394.44	1143	1305.56	1316.67	North Central
// Rivers	2024-12-21	1292	1147.86	1200	1537.5	South South
// Sokoto	2024-12-21	1207.5	1125	1300	1286	North West
// Taraba	2024-12-21	1213.33	1100	1537.5	2845	North East
// Yobe	2024-12-21	1393.33	1116.67	1359.44	1196.11	North East
// Zamfara	2024-12-21	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-22	1196.25	1140	1310	1300	South East
// Abuja	2024-12-22	1340	1069.43	1400	1225	North Central
// Adamawa	2024-12-22	1172.78	1108.89	1375.56	1334.44	North East
// Akwa Ibom	2024-12-22	1181.38	1093.75	1371.67	1374.29	South South
// Anambra	2024-12-22	1278.75	1093.33	1400	1500	South East
// Bauchi	2024-12-22	1265.71	1184.29	1444.29	1307.14	North East
// Bayelsa	2024-12-22	1226	1110	0	1316.67	South South
// Benue	2024-12-22	1187.5	1091.5	1500	1500	North Central
// Borno	2024-12-22	1209.44	1181.44	1475	1400	North East
// Cross River	2024-12-22	1260	1070	1200	1300	South South
// Delta	2024-12-22	1213.75	1167.5	1480	1341.43	South South
// Ebonyi	2024-12-22	1181.67	1128.75	1500	1290	South East
// Edo	2024-12-22	1400	1121.43	1230	1420	South South
// Ekiti	2024-12-22	1191.11	1018.33	1286.86	1333.33	South West
// Enugu	2024-12-22	1197.5	1121.25	1300	1400	South East
// Gombe	2024-12-22	1170.56	1086.67	1413.33	1377.78	North East
// Imo	2024-12-22	1200	1126.88	1304.29	1387.5	South East
// Jigawa	2024-12-22	1270	1098.89	1425	1455	North West
// Kaduna	2024-12-22	1208.89	1125.56	1300	1260	North West
// Kano	2024-12-22	1258.57	1127.5	1325	1475	North West
// Katsina	2024-12-22	1177.14	1073.75	1321.43	1380	North West
// Kebbi	2024-12-22	1255.71	1125	1350	1475	North West
// Kogi	2024-12-22	1152.88	1069.88	1425	1381.25	North Central
// Kwara	2024-12-22	1250	1093.75	1225	1400	North Central
// Lagos	2024-12-22	1142.84	1031.26	1475	1237.5	South West
// Nasarawa	2024-12-22	1170.83	1094.38	1500	1366.67	North Central
// Niger	2024-12-22	1158	1088.75	1400	1347.5	North Central
// Ogun	2024-12-22	1140.63	1046.13	1350	1314.29	South West
// Ondo	2024-12-22	1278	1144.29	1200	1525	South West
// Osun	2024-12-22	1151.88	1034.13	1294	1418.57	South West
// Oyo	2024-12-22	1149	1006.38	1310	1337.5	South West
// Plateau	2024-12-22	1395.33	1143	1305.56	1316.67	North Central
// Rivers	2024-12-22	1285	1137.5	1200	1516.67	South South
// Sokoto	2024-12-22	1186.67	1073.33	1300	1280	North West
// Taraba	2024-12-22	1213.33	1101.67	1537.5	1345	North East
// Yobe	2024-12-22	1403.33	1083.89	1360.56	1195	North East
// Zamfara	2024-12-22	1255	1185	1200	1336.25	North West
// Abia	2024-12-23	1193.75	1076.88	1310	1300	South East
// Abuja	2024-12-23	1282.43	1068.38	1175	1366.67	North Central
// Adamawa	2024-12-23	1172.22	1110	1377.56	1334.44	North East
// Akwa Ibom	2024-12-23	1181.38	1093.75	1371.67	1374.29	South South
// Anambra	2024-12-23	1276.25	1082.78	1441.67	1500	South East
// Bauchi	2024-12-23	1280	1162.86	1444.29	1307.14	North East
// Bayelsa	2024-12-23	1226	1103.75	0	1316.67	South South
// Benue	2024-12-23	1185	1086.11	1500	1500	North Central
// Borno	2024-12-23	1209.44	1165.89	1475	1400	North East
// Cross River	2024-12-23	1260	1078.75	1200	1300	South South
// Delta	2024-12-23	1213.75	1167.5	1480	1338.57	South South
// Ebonyi	2024-12-23	1190	1137.86	1500	1290	South East
// Edo	2024-12-23	1400	1112.86	1230	1440	South South
// Ekiti	2024-12-23	1191.11	1035	1285.71	1333.33	South West
// Enugu	2024-12-23	1200	1135.71	1321.43	1385.71	South East
// Gombe	2024-12-23	1170.56	1086.67	1413.33	1377.78	North East
// Imo	2024-12-23	1178.13	1040.63	1311.43	1300	South East
// Jigawa	2024-12-23	1270	1098.89	1425	1455	North West
// Kaduna	2024-12-23	1200	1112.22	1300	1260	North West
// Kano	2024-12-23	1254.29	1126	1325	1450	North West
// Katsina	2024-12-23	1177.14	1085	1321.43	1380	North West
// Kebbi	2024-12-23	1250	1121	1320	1450	North West
// Kogi	2024-12-23	1174.5	1071.13	1425	1368.75	North Central
// Kwara	2024-12-23	1250	1093.75	1225	1400	North Central
// Lagos	2024-12-23	1141.57	1007.27	1475	1237.5	South West
// Nasarawa	2024-12-23	1170.83	1094.38	1500	1366.67	North Central
// Niger	2024-12-23	1160	1070	1400	1340.83	North Central
// Ogun	2024-12-23	1141.63	1046.13	1350	1314.29	South West
// Ondo	2024-12-23	1287.5	1135	1200	1516.67	South West
// Osun	2024-12-23	1149.38	1034.13	1294	1418.57	South West
// Oyo	2024-12-23	1149.63	1004.13	1310	1350	South West
// Plateau	2024-12-23	1394.44	1141.89	1327.78	1333.33	North Central
// Rivers	2024-12-23	1285	1134.17	1200	1516.67	South South
// Sokoto	2024-12-23	1207.5	1125	1300	1286	North West
// Taraba	2024-12-23	1215	1106.25	1537.5	1345	North East
// Yobe	2024-12-23	1393.33	1104.44	1352.22	1196.67	North East
// Zamfara	2024-12-23	1255	1182.5	1200	1336.25	North West
// Abia	2024-12-24	1218.75	1076.88	1310	1300	South East
// Abuja	2024-12-24	1259.38	1070.14	1175	1324	North Central
// Adamawa	2024-12-24	1174.44	1112.22	1375.56	1346.67	North East
// Akwa Ibom	2024-12-24	1181.38	1092.5	1371.67	1374.29	South South
// Anambra	2024-12-24	1231.25	1023.75	1400	1483.33	South East
// Bauchi	2024-12-24	1280	1162.86	1444.29	1307.14	North East
// Bayelsa	2024-12-24	1226	1090	0	1316.67	South South
// Benue	2024-12-24	1176.25	1072.78	1500	1500	North Central
// Borno	2024-12-24	1206.67	1117.67	1475	1400	North East
// Cross River	2024-12-24	1260	1076.25	1200	1300	South South
// Delta	2024-12-24	1213.75	1167.5	1480	1341.43	South South
// Ebonyi	2024-12-24	1190	1137.43	1500	1290	South East
// Edo	2024-12-24	1300	1106.67	1325	1425	South South
// Ekiti	2024-12-24	1191.11	1028.33	1285.71	1343	South West
// Enugu	2024-12-24	1196.88	1109.38	1300	1400	South East
// Gombe	2024-12-24	1173.33	1084.44	1412.22	1323.33	North East
// Imo	2024-12-24	1178.13	1040.63	1311.43	1300	South East
// Jigawa	2024-12-24	1270	1098.89	1425	1455	North West
// Kaduna	2024-12-24	1200	1096.67	1300	1250	North West
// Kano	2024-12-24	1245.71	1129.75	1325	1475	North West
// Katsina	2024-12-24	1177.14	1065.63	1321.43	1380	North West
// Kebbi	2024-12-24	1247.14	1120	1325	1450	North West
// Kogi	2024-12-24	1168.88	1043.5	1425	1368.75	North Central
// Kwara	2024-12-24	1250	1093.75	1225	1400	North Central
// Lagos	2024-12-24	1141.37	1005.65	1475	1237.5	South West
// Nasarawa	2024-12-24	1170.83	1094.38	1500	1366.67	North Central
// Niger	2024-12-24	1160	1080	1400	1340.83	North Central
// Ogun	2024-12-24	1143.13	1043.63	1350	1328.57	South West
// Ondo	2024-12-24	1268	1128.14	1200	1512.5	South West
// Osun	2024-12-24	1149.38	1001.88	1294	1418.57	South West
// Oyo	2024-12-24	1149.29	988.86	1310	1322.86	South West
// Plateau	2024-12-24	1388.89	1139.44	1305.56	1288.89	North Central
// Rivers	2024-12-24	1272	1132.86	1200	1525	South South
// Sokoto	2024-12-24	1207.5	1115	1300	1286	North West
// Taraba	2024-12-24	1212.5	1026.25	1537.5	1345	North East
// Yobe	2024-12-24	1416.44	1120.56	1355	1197.22	North East
// Zamfara	2024-12-24	1262.5	1176.25	1200	1336.25	North West
// Abia	2024-12-25	1227.5	1082.5	1302.86	1300	South East
// Abuja	2024-12-25	1140	1055.33	1150	1336	North Central
// Adamawa	2024-12-25	1174.44	1085.56	1376.67	1346.67	North East
// Akwa Ibom	2024-12-25	1156	1076.67	1290	1385	South South
// Anambra	2024-12-25	1237.5	1025	1400	1550	South East
// Bauchi	2024-12-25	1280	1162.86	1444.29	1307.14	North East
// Bayelsa	2024-12-25	1226	1088.75	0	1316.67	South South
// Benue	2024-12-25	1176.25	1070	1500	1500	North Central
// Borno	2024-12-25	1206.67	1096.56	1475	1400	North East
// Cross River	2024-12-25	1260	1081.25	1200	1300	South South
// Delta	2024-12-25	1173.75	1091.88	1480	1338.57	South South
// Ebonyi	2024-12-25	1181.67	1128.38	1500	1290	South East
// Edo	2024-12-25	1400	1082.86	1225	1437.5	South South
// Ekiti	2024-12-25	1180	993.33	1250	1300	South West
// Enugu	2024-12-25	1232.5	1083.13	1309.67	1400	South East
// Gombe	2024-12-25	1173.33	1064.44	1412.22	1327.78	North East
// Imo	2024-12-25	1177.78	1047.22	1316.25	1300	South East
// Jigawa	2024-12-25	1240	1096.67	1400	1410	North West
// Kaduna	2024-12-25	1208.89	1112.22	1300	1253.75	North West
// Kano	2024-12-25	1248.57	1123.75	1325	1475	North West
// Katsina	2024-12-25	1177.14	1014.88	1321.43	1380	North West
// Kebbi	2024-12-25	1248.33	1111.43	1316.67	1475	North West
// Kogi	2024-12-25	1158.25	1057.5	1425	1368.75	North Central
// Kwara	2024-12-25	1250	1093.75	1225	1400	North Central
// Lagos	2024-12-25	1141.37	1004.12	1475	1237.5	South West
// Nasarawa	2024-12-25	1170.83	1092.5	1500	1366.67	North Central
// Niger	2024-12-25	1160	1080	1400	1340.83	North Central
// Ogun	2024-12-25	1143.13	1030.5	1350	1342.86	South West
// Ondo	2024-12-25	1260	1121.67	1200	1533.33	South West
// Osun	2024-12-25	1151.88	1001.88	1294	1418.57	South West
// Oyo	2024-12-25	1147.75	984.38	1310	1331.25	South West
// Plateau	2024-12-25	1394.44	1131.11	1311.11	1305.56	North Central
// Rivers	2024-12-25	1276.67	1138.75	1200	1520	South South
// Sokoto	2024-12-25	1206.25	1106.25	1300	1286	North West
// Taraba	2024-12-25	1210	1013.67	1537.5	1345	North East
// Yobe	2024-12-25	1425	1116.11	1355.56	1196.67	North East
// Zamfara	2024-12-25	1262.5	1176.25	1200	1336.25	North West
// Abia	2024-12-26	1218.75	1075.63	1310	1300	South East
// Abuja	2024-12-26	1312.5	1074.08	1200	1333.33	North Central
// Adamawa	2024-12-26	1172.22	1084.44	1380	1345.56	North East
// Akwa Ibom	2024-12-26	1168.2	1043.8	1326.67	1362.5	South South
// Anambra	2024-12-26	1243.75	1067.22	1433.33	1560	South East
// Bauchi	2024-12-26	1280	1162.86	1444.29	1307.14	North East
// Bayelsa	2024-12-26	1226	1090	0	1316.67	South South
// Benue	2024-12-26	1171.25	1075.5	1500	1500	North Central
// Borno	2024-12-26	1206.11	1097.67	1475	1400	North East
// Cross River	2024-12-26	1260	1078.75	1200	1300	South South
// Delta	2024-12-26	1172.14	1092.14	1487.5	1341.67	South South
// Ebonyi	2024-12-26	1181.67	1128.38	1500	1290	South East
// Edo	2024-12-26	1400	1104.29	1216.67	1425	South South
// Ekiti	2024-12-26	1191.11	1025	1285.71	1333.33	South West
// Enugu	2024-12-26	1243.75	1108.75	1300	1400	South East
// Gombe	2024-12-26	1173.33	1070	1412.22	1323.33	North East
// Imo	2024-12-26	1225	1041.88	1325.71	1300	South East
// Jigawa	2024-12-26	1270	1073.22	1425	1455	North West
// Kaduna	2024-12-26	1208.89	1112.22	1300	1253.75	North West
// Kano	2024-12-26	1218.57	1122.86	1300	1400	North West
// Katsina	2024-12-26	1177.14	1023.63	1321.43	1380	North West
// Kebbi	2024-12-26	1202.86	1117.14	1275	1450	North West
// Kogi	2024-12-26	1169.75	1056.38	1425	1368.75	North Central
// Kwara	2024-12-26	1250	1093.75	1225	1400	North Central
// Lagos	2024-12-26	1141.47	1002.47	1475	1237.5	South West
// Nasarawa	2024-12-26	1170.83	1092.5	1500	1366.67	North Central
// Niger	2024-12-26	1158	1081.43	1400	1340.83	North Central
// Ogun	2024-12-26	1143.13	1028	1350	1342.86	South West
// Ondo	2024-12-26	1278	1130	1200	1525	South West
// Osun	2024-12-26	1150	995.63	1294	1418.57	South West
// Oyo	2024-12-26	1149	990.5	1310	1337.5	South West
// Plateau	2024-12-26	1394.44	1130	1311.11	1300	North Central
// Rivers	2024-12-26	1277.5	1226.67	1200	1500	South South
// Sokoto	2024-12-26	1207.5	1091.25	1300	1312	North West
// Taraba	2024-12-26	1206.67	1010.33	1537.5	1345	North East
// Yobe	2024-12-26	1449.44	1109.44	1357.22	1196.11	North East
// Zamfara	2024-12-26	1255	1176.25	1200	1336.25	North West
// Abia	2024-12-27	1225	1075.63	1302.86	1300	South East
// Abuja	2024-12-27	1288.57	1063.67	1150	1318	North Central
// Adamawa	2024-12-27	1173.89	1076.67	1378.89	1344.44	North East
// Akwa Ibom	2024-12-27	1177.63	1053.63	1371.67	1367.14	South South
// Anambra	2024-12-27	1261.43	1056.43	1400	1537.5	South East
// Bauchi	2024-12-27	1280	1162.86	1444.29	1307.14	North East
// Bayelsa	2024-12-27	1226	1090	0	1316.67	South South
// Benue	2024-12-27	1176.25	1070	1500	1500	North Central
// Borno	2024-12-27	1205.56	1098.22	1475	1400	North East
// Cross River	2024-12-27	1260	1081.25	1200	1300	South South
// Delta	2024-12-27	1164.38	1094.38	1480	1338.57	South South
// Ebonyi	2024-12-27	1181.67	1128.38	1500	1290	South East
// Edo	2024-12-27	1400	1092.86	1208.33	1408.33	South South
// Ekiti	2024-12-27	1188.33	1014.58	1277.78	1328.57	South West
// Enugu	2024-12-27	1243.75	1108.75	1300	1400	South East
// Gombe	2024-12-27	1173.33	1070	1412.22	1323.33	North East
// Imo	2024-12-27	1178.13	1040.63	1311.43	1300	South East
// Jigawa	2024-12-27	1270	1073.22	1425	1455	North West
// Kaduna	2024-12-27	1200	1096.67	1300	1250	North West
// Kano	2024-12-27	1194.29	1103.75	1275	1450	North West
// Katsina	2024-12-27	1178.57	1031.75	1321.43	1380	North West
// Kebbi	2024-12-27	1180	1112.86	1275	1450	North West
// Kogi	2024-12-27	1170.75	1064.63	1425	1375	North Central
// Kwara	2024-12-27	1250	1081.25	1225	1400	North Central
// Lagos	2024-12-27	1141.37	998.09	1475	1237.5	South West
// Nasarawa	2024-12-27	1165	1084	1500	1375	North Central
// Niger	2024-12-27	1160	1070.63	1400	1340.83	North Central
// Ogun	2024-12-27	1143.13	1028	1350	1328.57	South West
// Ondo	2024-12-27	1268	1127.14	1200	1550	South West
// Osun	2024-12-27	1147.5	995.63	1294	1418.57	South West
// Oyo	2024-12-27	1148.13	1007.38	1310	1331.25	South West
// Plateau	2024-12-27	1394.44	1126.67	1311.11	1288.89	North Central
// Rivers	2024-12-27	1282	1131.43	1200	1525	South South
// Sokoto	2024-12-27	1201.82	1075	1300	1285	North West
// Taraba	2024-12-27	1208.89	1006.44	1537.5	1345	North East
// Yobe	2024-12-27	1448.89	1115.56	1355.56	1197.22	North East
// Zamfara	2024-12-27	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-28	1225	1075.63	1302.86	1300	South East
// Abuja	2024-12-28	1288.57	1069.92	1150	1318	North Central
// Adamawa	2024-12-28	1172.22	1090	1378.89	1344.44	North East
// Akwa Ibom	2024-12-28	1177.63	1053.63	1371.67	1367.14	South South
// Anambra	2024-12-28	1245	1074.38	1437.5	1525	South East
// Bauchi	2024-12-28	1280	1162.86	1444.29	1307.14	North East
// Bayelsa	2024-12-28	1226	1090	0	1316.67	South South
// Benue	2024-12-28	1171.25	1072.78	1500	1500	North Central
// Borno	2024-12-28	1206.11	1096.56	1475	1400	North East
// Cross River	2024-12-28	1260	1085	1200	1300	South South
// Delta	2024-12-28	1175	1111.25	1480	1340	South South
// Ebonyi	2024-12-28	1181.67	1128.38	1500	1290	South East
// Edo	2024-12-28	1400	1100	1210	1420	South South
// Ekiti	2024-12-28	1191.11	1021.67	1285.71	1316.67	South West
// Enugu	2024-12-28	1243.75	1108.75	1300	1400	South East
// Gombe	2024-12-28	1173.33	1070	1412.22	1323.33	North East
// Imo	2024-12-28	1178.13	1040.63	1311.43	1300	South East
// Jigawa	2024-12-28	1270	1073.22	1425	1455	North West
// Kaduna	2024-12-28	1208.89	1107.78	1300	1257.5	North West
// Kano	2024-12-28	1188.57	1103.75	1275	1450	North West
// Katsina	2024-12-28	1178.57	1031.13	1321.43	1380	North West
// Kebbi	2024-12-28	1187	1111.43	1275	1450	North West
// Kogi	2024-12-28	1171.63	1063.38	1425	1368.75	North Central
// Kwara	2024-12-28	1250	1081.25	1225	1400	North Central
// Lagos	2024-12-28	1141.37	998.09	1475	1237.5	South West
// Nasarawa	2024-12-28	1170.83	1092.5	1500	1366.67	North Central
// Niger	2024-12-28	1160	1080	1400	1340.83	North Central
// Ogun	2024-12-28	1143.13	1019.5	1350	1342.86	South West
// Ondo	2024-12-28	1248	1127.14	1200	1537.5	South West
// Osun	2024-12-28	1150	995.63	1294	1418.57	South West
// Oyo	2024-12-28	1149.63	969	1310	1343.75	South West
// Plateau	2024-12-28	1394.44	1121.11	1311.11	1288.89	North Central
// Rivers	2024-12-28	1255	1123.33	1200	1533.33	South South
// Sokoto	2024-12-28	1207.5	1076.25	1300	1286	North West
// Taraba	2024-12-28	1208.89	1005.33	1537.5	1356.25	North East
// Yobe	2024-12-28	1486.11	1118.33	1360.56	1196.11	North East
// Zamfara	2024-12-28	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-29	1225	1075.63	1302.86	1300	South East
// Abuja	2024-12-29	1288.57	1063.55	1150	1318	North Central
// Adamawa	2024-12-29	1174.44	1090	1379.44	1346.67	North East
// Akwa Ibom	2024-12-29	1177.63	1053.63	1371.67	1367.14	South South
// Anambra	2024-12-29	1241.25	1044.44	1437.5	1525	South East
// Bauchi	2024-12-29	1280	1162.86	1444.29	1307.14	North East
// Bayelsa	2024-12-29	1226	1077.14	0	1316.67	South South
// Benue	2024-12-29	1176.25	1070	1500	1500	North Central
// Borno	2024-12-29	1206.11	1097.11	1475	1400	North East
// Cross River	2024-12-29	1260	1073.75	1200	1300	South South
// Delta	2024-12-29	1167.5	1091.88	1500	1338.57	South South
// Ebonyi	2024-12-29	1190	1137.43	1500	1290	South East
// Edo	2024-12-29	1105	1285.67	1225	1425	South South
// Ekiti	2024-12-29	1191.11	1023.89	1285.71	1333.33	South West
// Enugu	2024-12-29	1243.75	1108.75	1300	1400	South East
// Gombe	2024-12-29	1173.33	1070	1412.22	1327.78	North East
// Imo	2024-12-29	1178.13	1040.63	1311.43	1300	South East
// Jigawa	2024-12-29	1270	1073.22	1425	1455	North West
// Kaduna	2024-12-29	1208.89	1112.22	1300	1253.75	North West
// Kano	2024-12-29	1188.57	1100	1275	1450	North West
// Katsina	2024-12-29	1178.57	1031.75	1321.43	1380	North West
// Kebbi	2024-12-29	1185.71	1098.75	1275	1450	North West
// Kogi	2024-12-29	1171.25	1066.88	1425	1368.75	North Central
// Kwara	2024-12-29	1250	1081.25	1225	1400	North Central
// Lagos	2024-12-29	1141.37	998.09	1475	1237.5	South West
// Nasarawa	2024-12-29	1170.83	1072.5	1500	1366.67	North Central
// Niger	2024-12-29	1160	1033.75	1400	1340.83	North Central
// Ogun	2024-12-29	1143.13	1019.5	1350	1342.86	South West
// Ondo	2024-12-29	1248	1125.71	1200	1525	South West
// Osun	2024-12-29	1150	995.63	1294	1418.57	South West
// Oyo	2024-12-29	1148.38	969.25	1310	1343.75	South West
// Plateau	2024-12-29	1394.44	1121.11	1311.11	1294.44	North Central
// Rivers	2024-12-29	1248	1101.43	1275	1512.5	South South
// Sokoto	2024-12-29	1207.5	951.25	1300	1286	North West
// Taraba	2024-12-29	1208.89	1004.22	1537.5	1351.25	North East
// Yobe	2024-12-29	1465.56	1115	1362.78	1198.33	North East
// Zamfara	2024-12-29	1255	1181.25	1200	1336.25	North West
// Abia	2024-12-30	1243.75	1075.63	1302.86	1300	South East
// Abuja	2024-12-30	1258.57	1050.4	1150	1324	North Central
// Adamawa	2024-12-30	1175.56	1090	1376.67	1346.67	North East
// Akwa Ibom	2024-12-30	1177.63	1053.63	1371.67	1367.14	South South
// Anambra	2024-12-30	1248.75	1075	1450	1512.5	South East
// Bauchi	2024-12-30	1280	1162.86	1444.29	1307.14	North East
// Bayelsa	2024-12-30	1212	1075	0	1316.67	South South
// Benue	2024-12-30	1165	1065.42	1500	1500	North Central
// Borno	2024-12-30	1206.11	1091.56	1475	1400	North East
// Cross River	2024-12-30	1260	1073.75	1200	1300	South South
// Delta	2024-12-30	1164.38	1091.88	1480	1346.67	South South
// Ebonyi	2024-12-30	1181.67	1128.38	1500	1290	South East
// Edo	2024-12-30	1400	1090	1220	1430	South South
// Ekiti	2024-12-30	1191.11	1023.89	1285.71	1333.33	South West
// Enugu	2024-12-30	1246.88	1109.38	1307.14	1400	South East
// Gombe	2024-12-30	1173.33	1070	1412.22	1323.33	North East
// Imo	2024-12-30	1224.38	1061.25	1314.29	1387.5	South East
// Jigawa	2024-12-30	1270	1073.22	1425	1455	North West
// Kaduna	2024-12-30	1208.89	1112.22	1300	1253.75	North West
// Kano	2024-12-30	1184.29	1093.75	1275	1450	North West
// Katsina	2024-12-30	1178.57	1031.75	1321.43	1380	North West
// Kebbi	2024-12-30	1174.29	1098.75	1275	1450	North West
// Kogi	2024-12-30	1176	1045.88	1418.75	1393.75	North Central
// Kwara	2024-12-30	1300	1053.33	1200	0	North Central
// Lagos	2024-12-30	1140.58	994.97	1475	1237.5	South West
// Nasarawa	2024-12-30	1158.33	1043.33	1500	1350	North Central
// Niger	2024-12-30	1160	1033.75	1400	1340.83	North Central
// Ogun	2024-12-30	1143.13	1019.5	1350	1344	South West
// Ondo	2024-12-30	1230	1107.5	1200	1525	South West
// Osun	2024-12-30	1150	995.63	1294	1418.57	South West
// Oyo	2024-12-30	1145.88	969.88	1310	1331.25	South West
// Plateau	2024-12-30	1388.89	1121.11	1311.11	1288.89	North Central
// Rivers	2024-12-30	1236	1121.43	1200	1525	South South
// Sokoto	2024-12-30	1207.5	1076.25	1300	1286	North West
// Taraba	2024-12-30	1208.89	1004.22	1537.5	1345	North East
// Yobe	2024-12-30	1488.89	1118.33	1361.11	1196.67	North East
// Zamfara	2024-12-30	1255	1176.25	1200	1336.25	North West
// Abia	2024-12-31	1243.75	1075.63	1310	1300	South East
// Abuja	2024-12-31	1288.86	1024.91	1175	1387.5	North Central
// Adamawa	2024-12-31	1176.11	1090	1378.33	1345.56	North East
// Akwa Ibom	2024-12-31	1177.63	1053.63	1371.67	1364.29	South South
// Anambra	2024-12-31	1245	1050	1400	1487.5	South East
// Bauchi	2024-12-31	1280	1162.86	1444.29	1307.14	North East
// Bayelsa	2024-12-31	1216	1076.88	0	1316.67	South South
// Benue	2024-12-31	1176.25	1071.82	1500	1500	North Central
// Borno	2024-12-31	1200.56	1089.89	1475	1400	North East
// Cross River	2024-12-31	1260	1073.75	1200	1300	South South
// Delta	2024-12-31	1171.25	1091.88	1480	1342.86	South South
// Ebonyi	2024-12-31	1181.67	1128.38	1500	1290	South East
// Edo	2024-12-31	1400	1098	1200	1412.5	South South
// Ekiti	2024-12-31	1191.11	1023.89	1285.71	1334.67	South West
// Enugu	2024-12-31	1246.88	1109.38	1307.14	1400	South East
// Gombe	2024-12-31	1173.33	1070	1412.22	1323.33	North East
// Imo	2024-12-31	1178.13	1040.63	1311.43	1300	South East
// Jigawa	2024-12-31	1270	1073.22	1425	1455	North West
// Kaduna	2024-12-31	1208.89	1122.22	1300	1253.75	North West
// Kano	2024-12-31	1180	1093.13	1275	1450	North West
// Katsina	2024-12-31	1180	1031.75	1342.86	1410	North West
// Kebbi	2024-12-31	1171.43	1088.13	1275	1450	North West
// Kogi	2024-12-31	1172.88	1037.38	1425	1393.75	North Central
// Kwara	2024-12-31	1250	1081.25	1225	1400	North Central
// Lagos	2024-12-31	1140.58	988.41	1475	1237.5	South West
// Nasarawa	2024-12-31	1170.83	1056.25	1500	1366.67	North Central
// Niger	2024-12-31	1160	1033.75	1400	1340.83	North Central
// Ogun	2024-12-31	1143.13	1019.5	1350	1342.86	South West
// Ondo	2024-12-31	1242.5	1091.67	1200	1533.33	South West
// Osun	2024-12-31	1150	993.13	1294	1418.57	South West
// Oyo	2024-12-31	1149	954.88	1310	1337.5	South West
// Plateau	2024-12-31	1400	1121.11	1294.44	1288.89	North Central
// Rivers	2024-12-31	1215	1098.33	1200	1533.33	South South
// Sokoto	2024-12-31	1207.5	1076.25	1300	1286	North West
// Taraba	2024-12-31	1212.22	1004.22	1531.25	1345	North East
// Yobe	2024-12-31	1490	1117.78	1362.78	1197.22	North East
// Zamfara	2024-12-31	1255	1176.25	1200	1336.25	North West
// Abia	2025-01-01	1243.75	1075.63	1310	1300	South East
// Abuja	2025-01-01	1284.29	1053.77	1125	1318	North Central
// Adamawa	2025-01-01	1176.67	1078.89	1375.56	1345.56	North East
// Akwa Ibom	2025-01-01	1177.63	1053.63	1371.67	1364.29	South South
// Anambra	2025-01-01	1231.25	1055	1400	1500	South East
// Bauchi	2025-01-01	1280	1162.86	1444.29	1307.14	North East
// Bayelsa	2025-01-01	1216	1063.63	0	1316.67	South South
// Benue	2025-01-01	1163.75	1063	1500	1500	North Central
// Borno	2025-01-01	1206.11	1089.89	1475	1400	North East
// Cross River	2025-01-01	1260	1050	1200	1300	South South
// Delta	2025-01-01	1173.75	1091.88	1480	1345	South South
// Ebonyi	2025-01-01	1181.67	1128.38	1500	1290	South East
// Edo	2025-01-01	1400	1115.71	1225	1416.67	South South
// Ekiti	2025-01-01	1156.67	978.89	1188.57	1333.33	South West
// Enugu	2025-01-01	1246.88	1109.38	1307.14	1400	South East
// Gombe	2025-01-01	1173.33	1070	1412.22	1323.33	North East
// Imo	2025-01-01	1225	1041.25	1325.71	1300	South East
// Jigawa	2025-01-01	1255	1073.22	1425	1455	North West
// Kaduna	2025-01-01	1208.89	1112.22	1300	1253.75	North West
// Kano	2025-01-01	1171.43	1092.5	1275	1450	North West
// Katsina	2025-01-01	1178.57	1031.75	1328.57	1420	North West
// Kebbi	2025-01-01	1171.43	1096.88	1300	1450	North West
// Kogi	2025-01-01	1171	1044.29	1421.43	1414.29	North Central
// Kwara	2025-01-01	1250	1081.25	1225	1400	North Central
// Lagos	2025-01-01	1140.58	988.41	1475	1237.5	South West
// Nasarawa	2025-01-01	1158.33	1031.67	1500	1350	North Central
// Niger	2025-01-01	1160	1033.75	1400	1340.83	North Central
// Ogun	2025-01-01	1143.13	1018.88	1400	1357.14	South West
// Ondo	2025-01-01	1240	1096.67	1200	1533.33	South West
// Osun	2025-01-01	1150	980.63	1294	1418.57	South West
// Oyo	2025-01-01	1149.75	970.38	1310	1337.5	South West
// Plateau	2025-01-01	1388.89	1121.11	1311.11	1288.89	North Central
// Rivers	2025-01-01	1242	1114.29	1200	1525	South South
// Sokoto	2025-01-01	1207.5	1076.25	1300	1286	North West
// Taraba	2025-01-01	1208.89	1004.22	1537.5	1345	North East
// Yobe	2025-01-01	1490	1120.56	1351.11	1196.11	North East
// Zamfara	2025-01-01	1255	1176.25	1200	1336.25	North West
// Abia	2025-01-02	1243.75	1075.63	1310	1300	South East
// Abuja	2025-01-02	1322.5	1050.08	1150	1318	North Central
// Adamawa	2025-01-02	1174.44	1086.67	1374.44	1346.67	North East
// Akwa Ibom	2025-01-02	1177.63	1053.63	1371.67	1364.29	South South
// Anambra	2025-01-02	1256.25	1061.11	1400	1500	South East
// Bauchi	2025-01-02	1280	1102.86	1444.29	1307.14	North East
// Bayelsa	2025-01-02	1216	1075	0	1316.67	South South
// Benue	2025-01-02	1163.75	1067	1500	1500	North Central
// Borno	2025-01-02	1206.25	1089.25	1471.43	1400	North East
// Cross River	2025-01-02	1253.33	1052.22	1200	1300	South South
// Delta	2025-01-02	1173.75	1091.88	1480	1345	South South
// Ebonyi	2025-01-02	1181.67	1128.38	1500	1290	South East
// Edo	2025-01-02	1400	1126	1225	1425	South South
// Ekiti	2025-01-02	1177.78	980	1242.86	1350	South West
// Enugu	2025-01-02	1246.88	1109.38	1307.14	1400	South East
// Gombe	2025-01-02	1173.33	1070	1412.22	1323.33	North East
// Imo	2025-01-02	1230	1041.25	1325.71	1300	South East
// Jigawa	2025-01-02	1270	1073.22	1425	1455	North West
// Kaduna	2025-01-02	1208.89	1116.67	1300	1253.75	North West
// Kano	2025-01-02	1174.29	1096.25	1275	1450	North West
// Katsina	2025-01-02	1181.43	1009.38	1335.71	1410	North West
// Kebbi	2025-01-02	1171.43	1095.63	1275	1450	North West
// Kogi	2025-01-02	1171.5	1044.13	1393.75	1412.5	North Central
// Kwara	2025-01-02	1250	1081.25	1225	1400	North Central
// Lagos	2025-01-02	1140.58	984.68	1475	1237.5	South West
// Nasarawa	2025-01-02	1170.83	1056.25	1500	1366.67	North Central
// Niger	2025-01-02	1160	1032.5	1400	1340.83	North Central
// Ogun	2025-01-02	1143.13	1010.13	1400	1342.86	South West
// Ondo	2025-01-02	1236	1107.14	1200	1537.5	South West
// Osun	2025-01-02	1150	980.63	1294	1418.57	South West
// Oyo	2025-01-02	1149.63	967.63	1310	1331.25	South West
// Plateau	2025-01-02	1394.44	1120	1300	1288.89	North Central
// Rivers	2025-01-02	1242	1117.14	1200	1525	South South
// Sokoto	2025-01-02	1207.5	1076.25	1300	1286	North West
// Taraba	2025-01-02	1208.89	1004.22	1537.5	1345	North East
// Yobe	2025-01-02	1491.67	1114.44	1357.22	1195.56	North East
// Zamfara	2025-01-02	1255	1176.25	1200	1336.25	North West
// Abia	2025-01-03	1243.75	1075.63	1310	1300	South East
// Abuja	2025-01-03	1288.57	1052	1150	1318	North Central
// Adamawa	2025-01-03	1175.56	1064.44	1373.33	1346.67	North East
// Akwa Ibom	2025-01-03	1177.63	1053.63	1371.67	1364.29	South South
// Anambra	2025-01-03	1256.25	1071.67	1400	1525	South East
// Bauchi	2025-01-03	1280	1108.57	1444.29	1307.14	North East
// Bayelsa	2025-01-03	1215	1063.33	0	1300	South South
// Benue	2025-01-03	1171.25	1064.44	1500	1500	North Central
// Borno	2025-01-03	1206.11	1090.78	1475	1400	North East
// Cross River	2025-01-03	1260	1051.25	1200	1300	South South
// Delta	2025-01-03	1150	1066.67	1450	1220	South South
// Ebonyi	2025-01-03	1181.67	1128.38	1500	1290	South East
// Edo	2025-01-03	1400	1115.71	1208.33	1383.33	South South
// Ekiti	2025-01-03	1177.78	977.78	1227.14	1321.67	South West
// Enugu	2025-01-03	1246.88	1119.38	1307.14	1400	South East
// Gombe	2025-01-03	1173.33	1070	1412.22	1323.33	North East
// Imo	2025-01-03	1230	1041.25	1325.71	1306.25	South East
// Jigawa	2025-01-03	1270	1073.22	1425	1455	North West
// Kaduna	2025-01-03	1208.89	1112.22	1300	1253.75	North West
// Kano	2025-01-03	1171.43	1095	1275	1450	North West
// Katsina	2025-01-03	1178.57	1019.25	1342.86	1410	North West
// Kebbi	2025-01-03	1171.43	1098.13	1275	1450	North West
// Kogi	2025-01-03	1172.88	1044.13	1425	1387.5	North Central
// Kwara	2025-01-03	1250	1081.25	1225	1400	North Central
// Lagos	2025-01-03	1140.58	982.29	1475	1237.5	South West
// Nasarawa	2025-01-03	1162.5	1020	1500	1350	North Central
// Niger	2025-01-03	1160	1032.5	1400	1340.83	North Central
// Ogun	2025-01-03	1142.5	1009.5	1400	1342.86	South West
// Ondo	2025-01-03	1242	1105.71	1200	1487.5	South West
// Osun	2025-01-03	1150	980.63	1294	1418.57	South West
// Oyo	    2025-01-03	1149.63	967.88	1310	1343.75	South West
// Plateau	2025-01-03	1394.44	1106.67	1311.11	1288.89	North Central
// Rivers	2025-01-03	1242	1114.29	1200	1550	South South
// Sokoto	2025-01-03	1207.5	1076.25	1300	1286	North West
// Taraba	2025-01-03	1208.89	1004.22	1537.5	1345	North East
// Yobe	2025-01-03	1495.56	1082.22	1366.67	1201.11	North East
// Zamfara	2025-01-03	1255	1176.25	1200	1336.25	North West

