  export enum EditingModes {
    CREATE,
    READ,
    UPDATE,
    DELETE
  }


  // ! A solution that should work with setting modes[mode] === 'UPDATE'
  // export enum EditingModes {
  //   CREATE = 'CREATE',
  //   READ = 'READ',
  //   UPDATE = 'UPDATE',
  //   DELETE = 'DELETE'
  // }


// export class EditingModeClass {
//   enum EditingModes {
//     CREATE,
//     READ,  // 1
//     UPDATE, // 2
//     DELETE  // 3
//   }

//   constructor(
//     public mode: EditingModes
//   ) {}
// }


// ! Possible future update?
// https://stackoverflow.com/questions/29844959/enum-inside-class-typescript-definition-file
