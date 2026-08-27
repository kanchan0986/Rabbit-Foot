export const generateDoctorId = (name: string) => { 
    const doctorId = name.toLowerCase().replace(/ /g, '-')
    return doctorId
 }