"use client"
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
} from "@/features/components/ui"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch } from "@/common"
import { authThunks } from "@/features/auth/auth.slice"
import { useNavigate } from "react-router-dom"

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  })
  .refine(
    ({ confirmPassword, password }) => {
      return confirmPassword === password
    },
    {
      message: "The passwords do not match",
      path: ["confirmPassword"],
    },
  )

export function SignUp() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(
      authThunks.register(
        ({ email: values.email, password: values.password } = values),
      ),
    )
      .unwrap()
      .then(() => {
        navigate("/profile")
      })
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className=" w-[420px] h-[528px] ">
        <div className="flex flex-col gap-[20px] text-center">
          <Label className="">Sign Up</Label>
          <div className="">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[348px] h-[36px]"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>

                      <FormControl>
                        <Input
                          className="w-[348px] h-[36px]"
                          type="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          className="w-[348px] h-[36px]"
                          type="password"
                          placeholder="confirmPassword"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-[300px] " type="submit">
                  Sing Up
                </Button>
              </form>
            </Form>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Label className="w-[200px] h-[24px] ml-[40px] mt-[20px] text-gray-400">
              Already have an account?
            </Label>
            <Button
              className="w-[147px] h-[24px] mt-[20px] text-blue-600 underline"
              variant="link"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
