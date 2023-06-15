﻿using System;
using System.Xml.Linq;
using Microsoft.AspNetCore.Mvc;
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

        public static object Sql_login(string mail, string password)
        {
            {
                string sqlExpression = "SELECT * FROM users";
                using (var connection = new SqliteConnection("Data Source= users_database.db"))
                {
                    connection.Open();

                    SqliteCommand command = new SqliteCommand(sqlExpression, connection);
                    using (SqliteDataReader reader = command.ExecuteReader())
                    {
                        string otvet = null;

                        if (reader.HasRows) // если есть данные
                        {

                            while (reader.Read())   // построчно считываем данные
                            {
                                int x = 0;
                                var DBname = reader.GetValue(0);
                                var DBpassword = reader.GetValue(1);
                                var DBmail = reader.GetValue(3);



                                x++;
                                if (DBmail.ToString() == mail && DBpassword.ToString() == password)
                                {
                                    otvet = DBname.ToString();
                                    break;

                                }


                            }

                        }
                        return otvet;
                    }
                }

            }
        }

        public static object Sql_register(string name, string password,string mail)
        {
            string otvet = null;
            string Isnew = "yes";
            {
                string sqlExpression = "SELECT * FROM users";
                using (var connection = new SqliteConnection("Data Source=users_database.db"))
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
                                
                                var DBmail = reader.GetValue(3);


                                x++;

                                if (DBmail.ToString() == mail)
                                {
                                    Isnew = "no";
                                    break;
                                }
                               


                            }

                            


                        }
                    }
                }
                if (Isnew == "yes")
                {
                    using (var connection = new SqliteConnection("Data Source=users_database.db"))
                    {
                        connection.Open();

                        SqliteCommand command = new SqliteCommand();
                        command.Connection = connection;
                        command.CommandText = "INSERT INTO users (name, password, mail) VALUES ('"+name+"', '"+password+"', '"+mail+"')";
                        int number = command.ExecuteNonQuery();

                        Console.WriteLine($"В таблицу Users добавлено объектов: {number}");
                    }
                    otvet = name;
                }

            }
         return otvet;
        }

        public static object Sql_delete(string name)
        {
            bool otvet = false;
            string sqlExpression = "DELETE  FROM users WHERE name='"+name+"'";
            using (var connection = new SqliteConnection("Data Source=users_database.db"))
            {
                connection.Open();

                SqliteCommand command = new SqliteCommand(sqlExpression, connection);

                int number = command.ExecuteNonQuery();

                Console.WriteLine($"Удалено объектов: {number}");
                 otvet= true;
            }

            return otvet;
        }

        public static object Sql_update(string name, string password)
        {
            bool ischeked = false;
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
                           
                            var DBname = reader.GetValue(0);
                            var DBpassword = reader.GetValue(1);


                            x++;

                            if (DBname.ToString() == name )
                            {
                                ischeked = true;

                                if (DBpassword.ToString() == password)
                                {
                                    ischeked = false;

                                    return false;
                                
                                }
                            }
                            

                        }

                    }
                }
                if (ischeked == true)
                {
                    string sqlExpression1 = "UPDATE users SET password='"+password+"' WHERE name='"+name+"'";
                    using (var connection1 = new SqliteConnection("Data Source= users_database.db"))
                    {
                        connection1.Open();

                        SqliteCommand command1 = new SqliteCommand(sqlExpression1, connection1);

                        int number = command1.ExecuteNonQuery();

                        Console.WriteLine($"Обновлено объектов: {number}");
                    }
                }
            }


            return true;
        }
    }
}
