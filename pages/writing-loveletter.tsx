import * as Arrays from '@/data/Array'
import Head from 'next/head'
import HopeToDo, { HopeToDoProps } from '@/components/HopeToDo'
import IconButton from '@/components/IconButton'
import Link from 'next/link'
import React, { FC, useState, Dispatch, ChangeEvent } from 'react'
import SectionTitle from '@/components/SectionTitle'
import senkaAiIcon from '~/images/senka_ai.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LoveLetterProps, loveLetterProps } from '@/components/LoveLetter'
import { NextPage } from 'next'
import { ToastContainer, toast } from 'react-toastify'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faQuestionCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { isEmpty, clone } from 'lodash'
import { title } from '@/data/title'
import { useBoolean } from 'react-hanger/array'
import { useHopeToDoComponents } from '@/data/hooks/useHopeToDoComponents'
import { useInput } from 'react-hanger'
import { useRouter } from 'next/router'
import { useSwitch3 } from '@/data/hooks/useSwitch3'

type WritingLoveLetterResult = LoveLetterProps

// TODO: HopeToDoItem.textって必要じゃなくない？
const defaultWritingLoveLetterResult: WritingLoveLetterResult = {
  name: '',
  gender: '',
  role: 'wife',
  startTimeToIn: '21:00',
  endTimeToIn: '00:00',
  yourIconFilePath: '',
  hopeToDoWithYou: [
    { text: 'お話し', state: 0 },
    { text: 'デート', state: 0 },
    { text: 'ボイチャ', state: 0 },
    { text: '作業通話', state: 0 },
    { text: 'VR睡眠', state: 0 },
    { text: 'VR感度開発', state: 0 },
    { text: 'DM（Discordなど）', state: 0 },
    { text: 'リアルで会う', state: 0 },
    { text: 'ボイトレ', state: 0 },
  ],
  hopeToDoToYou: [
    { text: 'なでなで', state: 0 },
    { text: 'だきつき', state: 0 },
    { text: 'キス', state: 0 },
  ],
  hopeToDoFromYou: [
    { text: 'なでなで', state: 0 },
    { text: 'だきつき', state: 0 },
    { text: 'キス', state: 0 },
  ],
  hopeToEcchiToYou: [
    { text: 'みみなめ', state: 0 },
    { text: 'ディープキス', state: 0 },
    { text: '服を脱ぐ', state: 0 },
    { text: '服を脱がす', state: 0 },
    { text: 'あいぶ（上半身）', state: 0 },
    { text: 'あいぶ（下半身）', state: 0 },
    { text: 'ほんばん', state: 0 },
  ],
  hopeToEcchiFromYou: [
    { text: 'みみなめ', state: 0 },
    { text: 'ディープキス', state: 0 },
    { text: '服を脱ぐ', state: 0 },
    { text: '服を脱がす', state: 0 },
    { text: 'あいぶ（上半身）', state: 0 },
    { text: 'あいぶ（下半身）', state: 0 },
    { text: 'ほんばん', state: 0 },
  ],
  otherNotes: '',
}

const debugWritingLoveLetterResult: WritingLoveLetterResult = (() => {
  const a = clone(defaultWritingLoveLetterResult)

  a.name = '千夏あい'
  a.gender = 'イヌ'
  a.role = 'wife'
  a.startTimeToIn = '21:00'
  a.endTimeToIn = '23:00'
  a.yourIconFilePath = senkaAiIcon.src
  Arrays.updateAt_(a.hopeToDoWithYou, 0, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToDoWithYou, 1, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToDoWithYou, 3, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToDoWithYou, 4, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToDoWithYou, 5, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToDoWithYou, 6, (x) => ({
    ...x,
    state: 2 as const,
  }))
  Arrays.updateAt_(a.hopeToDoWithYou, 7, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToDoToYou, 0, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToDoToYou, 1, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToDoToYou, 2, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToDoFromYou, 0, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToDoFromYou, 1, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 0, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 1, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 2, (x) => ({
    ...x,
    state: 2 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 4, (x) => ({
    ...x,
    state: 2 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 5, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 6, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 0, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 1, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 2, (x) => ({
    ...x,
    state: 2 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 4, (x) => ({
    ...x,
    state: 2 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 5, (x) => ({
    ...x,
    state: 1 as const,
  }))
  Arrays.updateAt_(a.hopeToEcchiToYou, 6, (x) => ({
    ...x,
    state: 1 as const,
  }))
  a.otherNotes = '受け体質です //'

  return a
})()

/**
 * To make a request for [[Sheet]].
 */
const WritingLoveLetter: NextPage = () => {
  const router = useRouter()

  const props = getPreviousPropsIfExists(router.query) // input

  const name = useInput(props.name)
  const gender = useInput(props.gender)

  const [role, setRole] = useState(props.role)
  const setRoleByEvent = (e: ChangeEvent<HTMLInputElement>) => setRole(e.target.value)
  const isRoleWife = () => role === 'wife'
  const isRoleHusband = () => role === 'husband'
  const isRoleAnother = () => !isRoleWife() && !isRoleHusband()
  const anotherRoleText = useInput('')
  const setRoleToAnother = () => setRole(anotherRoleText.value)

  const startTimeToIn = useInput(props.startTimeToIn)
  const endTimeToIn = useInput(props.endTimeToIn)
  const [yourIconFilePath, setYourIconFilePath] = useState(props.yourIconFilePath)
  const setYourIconWithPreviewing = previewYourIconWith(setYourIconFilePath)

  const withYouComponents = useHopeToDoComponents(props.hopeToDoWithYou)
  const toYouComponents = useHopeToDoComponents(props.hopeToDoToYou)
  const fromYouComponents = useHopeToDoComponents(props.hopeToDoFromYou)

  const toYouEcchiComponents = useHopeToDoComponents(props.hopeToEcchiToYou)
  const [toYouEcchiIsVisible, { toggle: toggleToYouEcchiIsVisible }] = useBoolean(false)
  const fromYouEcchiComponents = useHopeToDoComponents(props.hopeToEcchiFromYou)
  const [fromYouEcchiIsVisible, { toggle: toggleFromYouEcchiIsVisible }] = useBoolean(false)

  const otherNotes = useInput(props.otherNotes)

  // output
  const getResult = () => ({
    name: name.value,
    gender: gender.value,
    role: role,
    startTimeToIn: startTimeToIn.value,
    endTimeToIn: endTimeToIn.value,
    yourIconFilePath: yourIconFilePath,
    hopeToDoWithYou: withYouComponents,
    hopeToDoToYou: toYouComponents,
    hopeToDoFromYou: fromYouComponents,
    hopeToEcchiToYou: toYouEcchiComponents,
    hopeToEcchiFromYou: fromYouEcchiComponents,
    otherNotes: otherNotes.value,
  })

  return (
    <div>
      <Head>
        <title>{title} - あなたの情報を入力</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <ToastContainer />

        <p className="font-extrabold text-pink-400 text-lg mt-4 md:text-2xl">
          まずは相手に情報を入力してもらうために
        </p>
        <p className="font-extrabold text-pink-400 text-lg mb-4 md:text-2xl">
          自分の情報を入力してください
        </p>

        <section className="rounded-box">
          <ExapleButton />
        </section>

        <section className="rounded-box mt-6 flex flex-col items-center w-3/4v">
          <SectionTitle>あなたのきほん情報</SectionTitle>
          <label className="mt-4">
            名前
            <input type="text" {...name.eventBind} placeholder="なまえ" className="ml-4" />
          </label>

          <label className="mt-2">
            性別
            <input
              type="text"
              {...gender.eventBind}
              placeholder="女 | 男 | いぬ | ねこ | （自由入力）"
              className="ml-4"
            />
          </label>

          <div className="flex flex-row flex-wrap mt-2">
            <div>あなたは</div>
            <label className="ml-4">
              <input type="radio" value="wife" onChange={setRoleByEvent} checked={isRoleWife()} />妻
            </label>
            <label className="ml-2">
              <input
                type="radio"
                value="husband"
                onChange={setRoleByEvent}
                checked={isRoleHusband()}
              />{' '}
              夫
            </label>
            <label className="ml-2">
              <input
                type="radio"
                value="another"
                onChange={setRoleToAnother}
                checked={isRoleAnother()}
              />
              <input type="text" {...anotherRoleText.eventBind} placeholder="その他（自由入力）" />
            </label>
          </div>

          <div className="flex flex-col my-4">
            <label>
              あなたのアイコン
              <input
                type="file"
                src={yourIconFilePath}
                onChange={setYourIconWithPreviewing}
                className="ml-4 py-2 w-56"
              />
            </label>
            {yourIconFilePath && (
              <div className="w-full flex flex-col items-center">
                <img
                  src={yourIconFilePath}
                  alt="あなたのアイコン"
                  className="w-32 h-auto mt-4 rounded-lg"
                />
              </div>
            )}
          </div>

          <label className="mt-2">
            インしやすい時間
            <input type="time" {...startTimeToIn.eventBind} className="ml-4" />
            {' 〜 '}
            <input type="time" {...endTimeToIn.eventBind} />
          </label>
        </section>

        <HopeToDo
          sectionName={
            <div>
              あなたが相手<span className="text-yellow-400">と</span>したいこと
            </div>
          }
          components={withYouComponents}
          className="mt-6 w-3/4v"
        />

        <HopeToDo
          sectionName={
            <div>
              あなたが相手<span className="text-yellow-400">に</span>したいこと
            </div>
          }
          components={toYouComponents}
          className="mt-6 w-3/4v"
        >
          <HopeToEcchi
            isVisible={toYouEcchiIsVisible}
            toggleIsVisible={toggleToYouEcchiIsVisible}
            components={toYouEcchiComponents}
          />
        </HopeToDo>

        <HopeToDo
          sectionName={
            <div>
              あなたが相手<span className="text-yellow-400">から</span>されたいこと
            </div>
          }
          components={fromYouComponents}
          className="mt-6 w-3/4v"
        >
          <HopeToEcchi
            isVisible={fromYouEcchiIsVisible}
            toggleIsVisible={toggleFromYouEcchiIsVisible}
            components={fromYouEcchiComponents}
          />
        </HopeToDo>

        <section className="rounded-box mt-6 flex flex-col items-center w-3/4v">
          <SectionTitle>その他</SectionTitle>
          <textarea
            {...otherNotes.eventBind}
            placeholder="相手に伝えたいことなど♡"
            className="w-full mt-4"
          />
        </section>

        {/* 
        <Link href={`confirm-loveletter?${makeResultToQuery(getResult())}`}>
          <a className="btn mt-6 shadow-lg">♡できばえを確認♡</a>
        </Link>
          */}
      </main>
    </div>
  )

  function previewYourIconWith(
    dispatch: Dispatch<string>,
  ): (event: ChangeEvent<HTMLInputElement>) => void {
    return () => {
      const target = event?.target as { files?: Array<Blob> } | null
      const uploaded = (target?.files ?? [])[0]
      if (uploaded === undefined) {
        // If no files selected.
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const file = e.target?.result
        if (typeof file !== 'string') {
          throw new Error(`Fatal error! unknown file type. file: ${file}`)
        }
        dispatch(file)
      }

      reader.readAsDataURL(uploaded)
    }
  }

  function makeResultToQuery(result: WritingLoveLetterResult): string {
    return encodeURI(`data=${JSON.stringify(result)}`)
  }

  /**
   * Apply a previous props if exists on URL query.
   */
  function getPreviousPropsIfExists(
    query: Record<string, string | Array<string> | undefined>,
  ): LoveLetterProps {
    if (query.debug) {
      return debugWritingLoveLetterResult
    }

    if (isEmpty(query)) {
      return defaultWritingLoveLetterResult
    }

    // If valid parameters input.
    const parsingPrevious = loveLetterProps.safeParse(query)
    if (!parsingPrevious.success) {
      toast.error('不明なURLクエリが指定されましたん ><', {
        position: 'top-center',
      })
      return defaultWritingLoveLetterResult
    }

    return parsingPrevious.data
  }
}

export default WritingLoveLetter

const ExapleButton: FC = () => {
  const { item, doSwitch } = useSwitch3(0)
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <FontAwesomeIcon icon={faExclamation} width={10} className="text-pink-200" />
        <p className="ml-2">操作説明</p>
      </div>

      <div className="flex flex-col items-center mt-4">
        <p>↓押して切り替える</p>
        <IconButton text="お試し" current={item} onClick={doSwitch} className="m-2" />
      </div>

      <div className="flex flex-col mt-4">
        <div className="flex flex-row">
          <FontAwesomeIcon icon={faQuestionCircle} width={25} />
          <p className="ml-2">←まだわからない</p>
        </div>

        <div className="flex flex-row mt-2">
          <FontAwesomeIcon icon={faThumbsUp} width={25} />
          <p className="ml-2">←したい</p>
        </div>

        <div className="flex flex-row mt-2">
          <FontAwesomeIcon icon={faTimesCircle} width={25} />
          <p className="ml-2">←したくない</p>
        </div>
      </div>
    </div>
  )
}

type HopeToEcchiProps = HopeToDoProps & {
  isVisible: boolean
  toggleIsVisible: () => void
}

const HopeToEcchi: FC<HopeToEcchiProps> = ({ isVisible, toggleIsVisible, components }) => (
  <>
    <label>
      <input type="checkbox" checked={isVisible} onChange={toggleIsVisible} />
      えっちな項目を表示する
    </label>
    {isVisible && <HopeToDo components={components} className="w-full" />}
  </>
)
