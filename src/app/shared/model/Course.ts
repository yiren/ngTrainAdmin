export interface Course{
    courseId: string;
    courseName: string;
    courseStartDate: string;
    courseEndDate: string;
    trainHours: number;
    studentCourses: any[];
    recordCount:number
  }