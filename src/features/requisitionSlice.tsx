import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RequisitionState {
  requisitionTitle: string;
  numberofOpenings: number;
  gender: string;
  urgency: string;
  jobTitle: string;
  jobDetails: string;
  jobLocation: string;
  jobPosition: string;
  interviewMode: string;
  interviewDuration: string;
  interviewLanguage: string;
}

const initialState: RequisitionState = {
  requisitionTitle: '',
  numberofOpenings: 0,
  gender: '',
  urgency: '',
  jobTitle: '',
  jobDetails: '',
  jobLocation: '',
  jobPosition: '',
  interviewMode: '',
  interviewDuration: '',
  interviewLanguage: '',
};


const requisitionSlice = createSlice({
  name: 'requisition',
  initialState,
  reducers: {
    updateRequisitionTitle: (state, action: PayloadAction<string>) => {
      state.requisitionTitle = action.payload;
    },
    updateNumberofOpenings: (state, action: PayloadAction<number>) => {
      state.numberofOpenings = action.payload;
    },
    updateGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    updateUrgency: (state, action: PayloadAction<string>) => {
      state.urgency = action.payload;
    },
    updateJobTitle: (state, action: PayloadAction<string>) => {
      state.jobTitle = action.payload;
    },
    updateJobDetails: (state, action: PayloadAction<string>) => {
      state.jobDetails = action.payload;
    },
    updateJobLocation: (state, action: PayloadAction<string>) => {
      state.jobLocation = action.payload;
    },
    updateJobPosition: (state, action: PayloadAction<string>) => {
      state.jobPosition = action.payload;
    },
    updateInterviewMode: (state, action: PayloadAction<string>) => {
      state.interviewMode = action.payload;
    },
    updateInterviewDuration: (state, action: PayloadAction<string>) => {
      state.interviewDuration = action.payload;
    },
    updateInterviewLanguage: (state, action: PayloadAction<string>) => {
      state.interviewLanguage = action.payload;
    },
  },
});

export const {
  updateRequisitionTitle,
  updateNumberofOpenings,
  updateGender,
  updateUrgency,
  updateJobTitle,
  updateJobDetails,
  updateJobLocation,
  updateJobPosition,
  updateInterviewMode,
  updateInterviewDuration,
  updateInterviewLanguage,
} = requisitionSlice.actions;

export default requisitionSlice.reducer;
