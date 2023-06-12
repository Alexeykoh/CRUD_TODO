using System;
using System.Xml.Linq;
using Microsoft.Data.Sqlite;

namespace CRUD_TODO_SERVER.Services
{
    public class sqliteServices
    {
        public static void Sql_get_main_content()
        {
            {
                string sqlExpression = "SELECT * FROM users";
                using (var connection = new SqliteConnection("Data Source= users_database.db"))
                {
                    connection.Open();

                    SqliteCommand command = new SqliteCommand(sqlExpression, connection);
                    using (SqliteDataReader reader = command.ExecuteReader())
                    {
                        if (reader.HasRows) // если есть данные
                        {

                            while (reader.Read())   // построчно считываем данные
                            {
                                int x = 0;
                                var d = reader.GetValue(0);
                                var name = reader.GetValue(1);
                                var age = reader.GetValue(2);


                                x++;
                                Console.WriteLine($"{d} \t {name} \t {age}");

                            }

                        }
                    }
                }

            }
        }
    }
}
