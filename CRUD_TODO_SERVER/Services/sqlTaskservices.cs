using CRUD_TODO_SERVER.Models;
using Microsoft.Data.Sqlite;
using System.Numerics;
using System.Threading.Tasks;

namespace CRUD_TODO_SERVER.Services

{
    public class sqlTaskservices
    {
        static  List<Models.Task> tasks=new List<Models.Task>();

        public static object Sql_get_task_byId(string name)
        {


            

            string sqlExpression = "SELECT * FROM task";
            using (var connection = new SqliteConnection("Data Source= users_database.db"))
            {
                connection.Open();

                SqliteCommand command = new SqliteCommand(sqlExpression, connection);
                using (SqliteDataReader reader = command.ExecuteReader())
                {

                    if (reader.HasRows) // если есть данные
                    {
                        tasks.Clear();
                        while (reader.Read())   // построчно считываем данные
                        {
                            int x = 0;


                            if (name == reader.GetValue(2).ToString())
                            {


                                tasks.Add(new Models.Task { taskId = x, title= reader.GetValue(1).ToString() });
                                


                                
                                

                            }

                            x++;
            

                        }

                    }
                }
            }
            return tasks;
        }
    }
}

