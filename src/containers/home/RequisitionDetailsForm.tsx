import { Button, Flex, Box } from "@chakra-ui/react";
import React, {useState} from "react";
import FormInput from "../../components/formComponents/FormInput";
import FormSelect from "../../components/formComponents/FormSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PageNumbers } from "../../interface/home";
import { IRequisitionDetails } from "../../interface/forms";
import { genderOptions, urgencyOptions } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import {
  updateRequisitionTitle,
  updateNumberofOpenings,
  updateGender,
  updateUrgency,
} from "../../features/requisitionSlice";

const RequisitionDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
}> = ({ handleTab }) => {
  const dispatch = useDispatch();


  
  const handleInputChange = (name: string, value: string) => {
    handleChange({ target: { name, value } });
    if(name === 'gender'){
      dispatch(updateGender(value))
    }
    else {
      dispatch(updateUrgency(value))
    }
    
    
  };


  

  const {
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    values,
    setFieldTouched,
    setFieldValue,
    isValid,
  } = useFormik<IRequisitionDetails>({
    initialValues: {
      requisitionTitle: "",
      noOfOpenings: 0,
      urgency: "",
      gender: "",
    },
    validationSchema: Yup.object().shape({
      requisitionTitle: Yup.string().required("Requisition title is required"),
      noOfOpenings: Yup.number()
        .typeError("Enter a valid number")
        .required("Number of openings is required")
        .positive("Enter a valid number")
        .min(1, "Enter a valid number"),
      urgency: Yup.string().required("Urgency is required"),
      gender: Yup.string().required("Gender is required"),
    }),
    onSubmit: (values) => {
      const { gender, noOfOpenings, requisitionTitle, urgency } = values;
      console.log({ values });

      handleTab(1);
    },
  });


  
  return (
    <Box width="100%" as="form" onSubmit={handleSubmit as any}>
      <Box width="100%">
        <FormInput
          label="Requisition Title"
          placeholder="Enter requisition title"
          name="requisitionTitle"
          onChange={(event) => {
            handleChange(event);
            dispatch(updateRequisitionTitle(event.target.value));
          }}
          onBlur={handleBlur}
          value={values?.requisitionTitle}
          error={errors?.requisitionTitle}
          touched={touched?.requisitionTitle}
        />
        <FormInput
          label="Number of openings"
          placeholder="Enter number of openings"
          name="noOfOpenings"
          
          onChange={(event) => {
            const value = parseInt(event.target.value);
            if (!isNaN(value)) {
              // Input is a valid number
              handleChange(event);
              dispatch(updateNumberofOpenings(value));
            }
          }}
          onBlur={handleBlur}
          value={values?.noOfOpenings}
          error={errors?.noOfOpenings}
          touched={touched?.noOfOpenings}
        />
        <FormSelect
          label="Gender"
          name="gender"
          placeholder="Select gender"
          options={genderOptions}
          onChange={handleInputChange}
          onBlur={setFieldTouched}
          error={errors.gender}
          touched={touched.gender}
          value={values.gender}
        />
        
        
        <FormSelect
          label="Urgency"
          name="urgency"
          placeholder="Select urgency"
          options={urgencyOptions}
          onChange={handleInputChange}
          onBlur={setFieldTouched}
          error={errors.urgency}
          touched={touched.urgency}
          value={values.urgency}
        />
        <Flex w="100%" justify="flex-end" mt="4rem">
          <Button colorScheme="red" type="submit">
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default RequisitionDetailsForm;
