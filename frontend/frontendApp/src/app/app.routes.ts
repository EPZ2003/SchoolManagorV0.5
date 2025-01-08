import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { OrganizationComponent } from './courses/organization/organization.component';
import { DeadlineComponent } from './courses/deadline/deadline.component';
import { TodoListComponent } from './courses/todo-list/todo-list.component';
import { SideProjectComponent } from './courses/side-project/side-project.component';
import { Component } from '@angular/core';


export const routes: Routes = [
    {
        path:"",
        component:LoginComponent
    },
    {
        path:"welcome",
        component:CoursesComponent,
        children: [
            {
                path:"organization-part",
                component: OrganizationComponent,

            },
            {
                path:"deadline-part",
                component: DeadlineComponent
            },
            {
                path:"todo-list-part",
                component: TodoListComponent
            },
            {
                path:"side-project-part",
                component: SideProjectComponent
            },
        ]
    }
];
