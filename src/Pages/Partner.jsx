// import React, { useState } from "react";

// const Partner = () => {
//   const [formData, setFormData] = useState({
//     entityName: "",
//     mobile: "",
//     email: "",
//     city: "",
//     pincode: "",
//     country: "",
//     landmark: "",
//     gstNumber: "",
//     msmeNumber: "",
//     bankName: "",
//     accountHolderName: "",
//     bankAccountNumber: "",
//     ifscCode: "",
//   });

//   const [fileName, setFileName] = useState({
//     panCard: "",
//     aadharCard: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       setFileName((prev) => ({ ...prev, [name]: files[0].name }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", formData, fileName);
//     // Add form submission logic here (API call or local handling)
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-md">
//       <h2 className="text-3xl font-bold text-center mb-8">Partner Registration</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Section: Basic Details */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <InputField label="Entity Name" name="entityName" value={formData.entityName} onChange={handleChange} />
//           <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} />
//           <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
//           <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
//           <InputField label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
//           <InputField label="Country" name="country" value={formData.country} onChange={handleChange} />
//           <InputField label="Landmark" name="landmark" value={formData.landmark} onChange={handleChange} />
//         </div>

//         {/* Section: File Upload */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <FileUpload label="Upload PAN Card" name="panCard" fileName={fileName.panCard} onChange={handleFileChange} />
//           <FileUpload label="Upload Aadhar Card" name="aadharCard" fileName={fileName.aadharCard} onChange={handleFileChange} />
//         </div>

//         {/* Section: GST/MSME */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <InputField label="GST Number (Compulsory)" name="gstNumber" value={formData.gstNumber} onChange={handleChange} />
//           <InputField label="MSME Number (Optional)" name="msmeNumber" value={formData.msmeNumber} onChange={handleChange} />
//         </div>

//         {/* Section: Bank Details */}
//         <h3 className="text-xl font-semibold mt-8 mb-2">Bank Details</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <InputField label="Bank Name" name="bankName" value={formData.bankName} onChange={handleChange} />
//           <InputField label="Account Holder Name" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} />
//           <InputField label="Bank Account Number" name="bankAccountNumber" value={formData.bankAccountNumber} onChange={handleChange} />
//           <InputField label="IFSC Code" name="ifscCode" value={formData.ifscCode} onChange={handleChange} />
//         </div>

//         <button
//           type="submit"
//           className="w-full mt-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// // Reusable input field component
// const InputField = ({ label, name, value, onChange, type = "text" }) => (
//   <div className="flex flex-col">
//     <label className="mb-1 font-medium">{label}</label>
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       required={label.toLowerCase().includes("optional") ? false : true}
//       className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//     />
//   </div>
// );

// // Reusable file upload component
// const FileUpload = ({ label, name, fileName, onChange }) => (
//   <div className="flex flex-col">
//     <label className="mb-1 font-medium">{label}</label>
//     <div className="flex items-center gap-4">
//       <label
//         htmlFor={name}
//         className="cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//       >
//         Choose File
//       </label>
//       <span className="text-sm text-gray-700 truncate">{fileName}</span>
//     </div>
//     <input
//       id={name}
//       type="file"
//       name={name}
//       accept="image/*,.pdf"
//       onChange={onChange}
//       required
//       className="hidden"
//     />
//   </div>
// );

// export default Partner;

import React, { useState } from "react";

const Partner = () => {
  const [formData, setFormData] = useState({
    entityName: "",
    mobile: "",
    email: "",
    city: "",
    pincode: "",
    country: "",
    landmark: "",
    gstNumber: "",
    msmeNumber: "",
    bankName: "",
    accountHolderName: "",
    bankAccountNumber: "",
    ifscCode: "",
    panNumber: "",
    aadharNumber: "",
    hotelName: "",
  });

  const [fileData, setFileData] = useState({
    panCard: "",
    aadharCard: "",
    ownerImage: "",
    hotelImages: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "hotelImages") {
      const fileNames = Array.from(files).map((file) => file.name);
      setFileData((prev) => ({ ...prev, hotelImages: fileNames }));
    } else {
      setFileData((prev) => ({ ...prev, [name]: files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData, fileData);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded-md">
      <h2 className="text-3xl font-bold text-center mb-8"> Partner </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Entity Name" name="entityName" value={formData.entityName} onChange={handleChange} />
          <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} />
          <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
          <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
          <InputField label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
          <InputField label="Country" name="country" value={formData.country} onChange={handleChange} />
          <InputField label="Landmark" name="landmark" value={formData.landmark} onChange={handleChange} />
        </div>

        {/* PAN and Aadhar Section */}
        <h3 className="text-xl font-semibold mt-8 mb-2">Identity Verification</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FileUpload label="Upload PAN Card" name="panCard" fileName={fileData.panCard} onChange={handleFileChange} />
          <InputField label="PAN Number" name="panNumber" value={formData.panNumber} onChange={handleChange} />

          <FileUpload label="Upload Aadhar Card" name="aadharCard" fileName={fileData.aadharCard} onChange={handleFileChange} />
          <InputField label="Aadhar Number" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} />
        </div>

        {/* GST & MSME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="GST Number (Compulsory)" name="gstNumber" value={formData.gstNumber} onChange={handleChange} />
          <InputField label="MSME Number (Optional)" name="msmeNumber" value={formData.msmeNumber} onChange={handleChange} />
        </div>

        {/* Bank Details */}
        <h3 className="text-xl font-semibold mt-8 mb-2">Bank Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Bank Name" name="bankName" value={formData.bankName} onChange={handleChange} />
          <InputField label="Account Holder Name" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} />
          <InputField label="Bank Account Number" name="bankAccountNumber" value={formData.bankAccountNumber} onChange={handleChange} />
          <InputField label="IFSC Code" name="ifscCode" value={formData.ifscCode} onChange={handleChange} />
        </div>

        {/* Hotel Information */}
        <h3 className="text-xl font-semibold mt-8 mb-2">Hotel Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Hotel Name" name="hotelName" value={formData.hotelName} onChange={handleChange} />
          <button
            type="button"
            onClick={() => alert("In production, fetch hotel images using Google API")}
             className="px-4 py-2 bg-cyan-800 text-white rounded hover:bg-gray-600 transition"
          >
             Search Images from Google
          </button>

          {/* <FileUpload label="Upload Owner Image" name="ownerImage" fileName={fileData.ownerImage} onChange={handleFileChange} />
          <FileUploadMultiple label="Upload Hotel Images" name="hotelImages" fileNames={fileData.hotelImages} onChange={handleFileChange} /> */}
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 bg-cyan-600 text-white font-semibold rounded-md hover:bg-gray-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="flex flex-col">
    <label className="mb-1 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={label.toLowerCase().includes("optional") ? false : true}
      className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

const FileUpload = ({ label, name, fileName, onChange }) => (
  <div className="flex flex-col">
    <label className="mb-1 font-medium">{label}</label>
    <div className="flex items-center gap-4">
      <label
        htmlFor={name}
        className="cursor-pointer px-4 py-2 bg-cyan-900 text-white rounded hover:bg-emerald-900 transition"
      >
        Choose File
      </label>
      <span className="text-sm text-gray-700 truncate">{fileName}</span>
    </div>
    <input
      id={name}
      type="file"
      name={name}
      accept="image/*,.pdf"
      onChange={onChange}
      required
      className="hidden"
    />
  </div>
);

// const FileUploadMultiple = ({ label, name, fileNames, onChange }) => (
//   <div className="flex flex-col">
//     <label className="mb-1 font-medium">{label}</label>
//     <label
//       htmlFor={name}
//       className="cursor-pointer px-4 py-2 bg-cyan-900 text-white rounded hover:bg-indigo-700 transition w-fit"
//     >
//       Choose Files
//     </label>
//     <input
//       id={name}
//       type="file"
//       name={name}
//       multiple
//       accept="image/*"
//       onChange={onChange}
//       className="hidden"
//     />
//     <ul className="mt-1 text-sm text-gray-700 space-y-1">
//       {fileNames.map((file, idx) => (
//         <li key={idx}>{file}</li>
//       ))}
//     </ul>
//   </div>
// );

export default Partner;



