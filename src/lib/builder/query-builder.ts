import {
  Builder,
  BuilderProp,
  BuilderResult,
  FieldWithArgs,
} from "../../types";

export class QueryBuilder<Query extends BuilderProp> {
  query(query: Builder<Query>) {
    let output = "query {\n";

    // output += parseFields(query);

    output += "}";
    return output;
  }
}

// function parseFields(query: BuilderResult, realQuery: BuilderProp) {
//   let output = "";

//   for (const key in query) {
//     const field = query[key];

//     if (typeof field === "undefined" || typeof realQuery[key] === "undefined")
//       continue;
//     else if (typeof field === "boolean") {
//       if (field === false) continue;
//       else output += key + "\n";
//     } else {
//       output += key;

//       let fields: string;
//       if (field["__typename"] === "__Field") {
//         if (field.args && typeof field.args === "object") {
//           const argKeys = Object.keys(field.args)
//           if (argKeys.length > 0) {
//             output += " ("
//             for (let k = 0; k < argKeys.length; k++) {
//               output += `${argKeys[k]}: ${field.args[argKeys[k]!]}`
//               if (k !== argKeys.length - 1) {
//                 output += ", ";
//               } else {
//                 output += ")"
//               }
//             }
//           }
//         }
//         fields = parseFields(field.data as any, realQuery[key]["data"]);
//       }
//       {
//         fields = parseFields(field as any, realQuery[key]);
//       }
//       output += " {\n";
//       output += fields;
//       output += "}\n";
//     }
//   }

//   return output;
// }

// function parseFields(query: BuilderResult, queryModel: BuilderProp): string {
//   let output = "";

//   for (const key in query) {
//     const field = query[key];
//     console.log(key + ": ", field);

//     if (field === undefined || queryModel[key] === undefined) continue;
//     else if (field === false) continue;
//     else if (field === true) {
//       output += key + "\n";
//     } else {
//       output += key;

//       let fieldResults: BuilderResult;
//       let model: BuilderProp;
//       if (queryModel[key].__typename === "__Field") {
//         const fieldWithArgs: FieldWithArgs = field as any;
//         fieldResults = fieldWithArgs["data"];
//         model = queryModel[key]["data"];
//         console.log("model: ", queryModel[key]);

//         const argKeys = Object.keys(fieldWithArgs.args);
//         if (argKeys && argKeys.length > 0) {
//           output += " (";
//           for (let k = 0; k < argKeys.length; k++) {
//             const argKey = argKeys[k];
//             if (!argKey) continue;
//             output += `${argKey}: ${fieldWithArgs.args[argKey]}`;

//             if (k !== argKeys.length - 1) {
//               output += ", ";
//             } else {
//               output += ")";
//             }
//           }
//         }
//       } else {
//         fieldResults = field as any;
//         model = queryModel[key];
//       }

//       output += " {\n";
//       output += parseFields(fieldResults, model);
//       output += "\n}";
//     }
//   }

//   return output;
// }
